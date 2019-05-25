(function(){
 loop1();
 loop2();
})();

function loop1(){
 var loop1 =[];
 for (var i = 0; i < 10; i++){
  loop1.push(i+'');
 }
 $('#loop1').text(loop1.join(''));
}

function loop2(){
 var loop2 =[];
 for (var i = 0; i < 10; i++){
  loop2.push('<p>');
  for(var j = 0; j < 10; j++){
   loop2.push('*');
  }
  loop2.push('</p>');
 }
 $('#loop2').html(loop2.join(''));
}