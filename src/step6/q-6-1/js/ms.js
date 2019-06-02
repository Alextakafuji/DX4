var is_game_over = false;

(function() {
	var table = initialize_table(9, 9);
	table = mine_cells(table, 10);
	table = init_cells(table);
	$('#table').html(create_table(table));
	bundle_table_event(table);
})();

function initialize_table(n, m, initialize) {
	if (initialize === undefined) {
		initialize = 0;
	}
	var table = new Array(n);
	for (var i = 0; i < n; i++) {
		table[i] = new Array(m);
		for (var j = 0; j < m; j++) {
			table[i][j] = initialize;
		}
	}
	return table;
}

function mine_cells(table, num) {

	var c = 0;
	while (c < num) {
		var x = Math.floor(Math.random() * table[0].length);
		var y = Math.floor(Math.random() * table.length);
	
		if (table[x][y] != 9) {
			table[x][y] = 9;
			c = c + 1;
		}
	}

	return table;
}

function init_cells(table) {

	var n = table.length;
	var m = table[0].length;

	for (var i = 0; i < n; i++) {
		for (var j = 0; j < m; j++) {
			if (table[i][j] === 9) {
				init_cells_around(i, j, table);
			}
		}
	}

	return table;
}

function init_cells_around(i, j, table) {
	var dx = [-1, 0, 1];
	var dy = [-1, 0, 1];

	var x = j;
	var y = i;

	for (var i = 0; i < 3; i++) {
		for (var j = 0; j < 3; j++) {
			var xx = x + dx[i];
			var yy = y + dy[j];
			if (dx[i] === 0 && dy[j] === 0) {
			} else {
				if (-1 < xx && xx < table[0].length && -1 < yy && yy < table.length) {
					if (table[yy][xx] != 9) {
						table[yy][xx] = table[yy][xx] + 1;
					}
				}
			}
		}
	}
}

function create_table(table) {
	var n = table.length;
	var m = table[0].length;

	var disp = [];
	disp.push('<table id="board">');
	for (var i = 0; i < n; i++) {
		disp.push('<tr>');
		for (var j = 0; j < m; j++) {
			disp.push('<td class="cell off"><span class="c' + table[i][j] + '">' + table[i][j] + '</span></td>');
		}
		disp.push('</tr>');
	}
	disp.push('</table>');
	return disp.join('');
}

function bundle_table_event(table) {
	var ban = document.getElementById('board');
	var n = table.length;
	var m = table[0].length;
	for (var i = 0; i < n; i++) {
		for (var j = 0; j < m; j++) {
			var cell = ban.rows[i].cells[j];
			cell.onclick = function() {
				handle_table_click(this, table);
			}
		}
	}
}

function handle_table_click(cell, table) {
	var n = cell.innerText;
	cell.className = 'cell on';
	var check = is_cell_bomb(cell);
	if (check) {
		is_game_over = true;
		$('#message').text('game over');
	} else {
		var check = is_finished(table);
		if (check) {
			$('#message').text('game clear');
		} else {
			if (cell.innerText === '0') {
				handle_table_click_spread(cell, table);
			}
		}
	}
}

function is_cell_bomb(cell) {
	if (cell.innerText === '9') {
		return true;
	} else {
		return false;
	}
}

function is_finished(table) {
	var n = table.length;
	var m = table[0].length;

	var ban = document.getElementById('board');
	for (var i = 0; i < n; i++) {
		for (var j = 0; j < m; j++) {
			var cell = ban.rows[i].cells[j];
			if (table[i][j] != 9 && cell.className === 'cell off') {
				return false;
			}
		}
	}
	return true;
}

function handle_table_click_spread(cell, table) {
	var dx = [-1, 0, 1];
	var dy = [-1, 0, 1];

	var x = cell.cellIndex;
	var y = cell.parentNode.rowIndex;

	var ban = document.getElementById('board');
	for (var i = 0; i < 3; i++) {
		for (var j = 0; j < 3; j++) {
			var xx = x + dx[i];
			var yy = y + dy[j];
			if (-1 < xx && xx < table[0].length && -1 < yy && yy < table.length) {
				var around = ban.rows[yy].cells[xx];
				if (table[yy][xx] === 0 && around.className === 'cell off') {
					around.className = 'cell on';
					handle_table_click_spread(around, table);
				} else if (table[yy][xx] != 9) {
					around.className = 'cell on';
				}
			}
		}
	}
}
