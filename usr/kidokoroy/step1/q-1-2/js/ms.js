var n = 10;
var m = 10;

(function(){
 $('#table').html(table());
})();

function table(){
 var table =[];
 for (var i = 0; i < n; i++){
  table.push('<tr><td>');
  for(var j = 0; j < m; j++){
   table.push(i + j);
   table.push('</td>');
  }
  table.push('</tr>');
 }
 return table;
}