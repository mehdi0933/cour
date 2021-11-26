var h = document.getElementById("h");
var m = document.getElementById("m");
var s = document.getElementById("s");
changeHour();
function printHours(){
  var date  = new Date();
  var H = date.getHours();
  var M = date.getMinutes();
  var S = date.getSeconds();

  h.innerHTML = H;
  m.innerHTML = M;
  s.innerHTML = S;
}

function changeHour(){
  printHours();
  setTimeout(changeHour, 1000);
}
