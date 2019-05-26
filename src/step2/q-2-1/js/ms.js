(function(){
 $('#table').html(create_table(init_cells(mine_cells(initialize_table(7,9),10))));
})();

function initialize_table(n,m,initialize){
 if (initialize === undefined){
 initialize = 0;
 }
 
 var table = new Array(n);
 for (i=0; i<n; i++){
  table[i] = new Array(m);
  for (j=0; j<m; j++){
   table[i][j] = initialize;
  }
 }
 return table;
}

function mine_cells(table,num){
 //TODO ŽÀ‘•‚µ‚Ä‚­‚¾‚³‚¢B
 table[1][1] = 9;
 return table;
}

function init_cells(table){
 //TODO ŽÀ‘•‚µ‚Ä‚­‚¾‚³‚¢B
 table[0][0] = 1;
 table[0][1] = 1;
 table[0][2] = 1;
 table[1][0] = 1;
 table[1][1] = 1;
 table[1][2] = 1;
 table[2][0] = 1;
 table[2][1] = 1;
 table[2][2] = 1;
 return table;
}

function create_table(table){
 var n = table.length;
 var m = table[0].length;
 
 var disp = [];
 disp.push('<table id="board">');
 for (i = 0; i < n; i++){
  disp.push('<tr>');
  for (j = 0;j < m; j++){
   disp.push('<td>' + table[i][j] + '</td>');
  }
  disp.push('</tr>');
 }
 disp.push('</table>');
 return disp.join('');
}