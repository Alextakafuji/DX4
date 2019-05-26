var is_game_over = false;

(function() {
	var table = initialize_table(7, 9);
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
	for (i = 0; i < n; i++) {
		table[i] = new Array(m);
		for (j = 0; j < m; j++) {
			table[i][j] = initialize;
		}
	}
	return table;
}

function mine_cells(table, num) {
	// TODO 実装してください。
	table[1][1] = 9;
	return table;
}

function init_cells(table) {
	// TODO 実装してください。
	table[0][0] = 1;
	table[0][1] = 1;
	table[0][2] = 1;
	table[1][0] = 1;
	table[1][2] = 1;
	table[2][0] = 1;
	table[2][1] = 1;
	table[2][2] = 1;
	return table;
}

function create_table(table) {
	var n = table.length;
	var m = table[0].length;

	var disp = [];
	disp.push('<table id="board">');
	for (i = 0; i < n; i++) {
		disp.push('<tr>');
		for (j = 0; j < m; j++) {
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
	for (i = 0; i < n; i++) {
		for (j = 0; j < m; j++) {
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
	for (i = 0; i < n; i++) {
		for (j = 0; j < m; j++) {
			var cell = ban.rows[i].cells[j];
			if (table[i][j] != 9 && cell.className === 'cell off') {
				return false;
			}
		}
	}
	return true;
}