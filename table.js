var x = 0;
function loaded(){
  document.getElementById('time').innerHTML = '';
for(var i = 0 ; i < 24 ; i++){
x = x + 1;
document.getElementById('time').innerHTML = document.getElementById('time').innerHTML + "<li class='collection-item' id='"+x+"'>" +  x + ' :' +"</li>";
}
list = localStorage.getItem('list');
list = list.split(',');
console.log(list);
x = -1;
for(var i = 0 ; i < list.length ; i++){
x = x + 1;
var word = list[x]
console.log(word.substring(word.indexOf('::') + 2,word.indexOf('::')+4));
var num = word.substring(word.indexOf('::') + 2,word.indexOf('::')+4);
console.log(num);
if(num != '' ){
  var job = word.substring(0,word.indexOf('::'))
  console.log(job);
  var id = parseInt(num) + 1;
  console.log(id);
  document.getElementById(id).innerHTML = document.getElementById(id).innerHTML + " " +  job;
}
}
}