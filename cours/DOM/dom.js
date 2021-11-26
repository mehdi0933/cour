var div = document.createElement("div");
div.setAttribute("id", "divTP3");

var p = document.createElement("p");
var txt1 = document.createTextNode("Langages basés sur ECMAScript :");
p.appendChild(txt1);


var dl = document.createElement("dl");

var dt1 = document.createElement("dt");
var dt1Text = document.createTextNode("JavaScript");
dt1.appendChild(dt1Text);

var dd1 = document.createElement("dd");
var dd1Text = document.createTextNode("JavaScript est un langage de programmation de scripts principalement utilisé dans les pages web interactives mais aussi coté serveur.");
dd1.appendChild(dd1Text);



var dt2 = document.createElement("dt");
var dt2Text = document.createTextNode("JScript");
dt2.appendChild(dt2Text);

var dd2 = document.createElement("dd");
var dd2Text = document.createTextNode("JScript est le nom générique de plusieurs implémentations d'ECMAScript 3 créées par Microsoft.");
dd2.appendChild(dd2Text);



var dt3 = document.createElement("dt");
var dt3Text = document.createTextNode("ActionScript");
dt3.appendChild(dt3Text);

var dd3 = document.createElement("dd");
var dd3Text = document.createTextNode("ActionScript est le langage de programmation utilisé au sein d'applications clientes (Adobe Flash, Adobe Flex) et serveur (Flash media server, JRun, Macromedia Generator).");
dd3.appendChild(dd3Text);



var dt4 = document.createElement("dt");
var dt4Text = document.createTextNode("EX4");
dt4.appendChild(dt4Text);

var dd4 = document.createElement("dd");
var dd4Text = document.createTextNode("ECMAScript for XML (E4X) est une extension XML au langage ECMAScript.");
dd4.appendChild(dd4Text);




dl.appendChild(dt1);
dl.appendChild(dd1);
dl.appendChild(dt2);
dl.appendChild(dd2);
dl.appendChild(dt3);
dl.appendChild(dd3);
dl.appendChild(dt4);
dl.appendChild(dd4);


div.appendChild(p);
div.appendChild(dl);

document.body.appendChild(div);

var dt = document.getElementsByTagName("dt");

for(let i = 0; i < dt.length; i++){
  dt[i].style.color = "red";
  dt[i].style.backgroundColor = "black";
  dt[i].style.fontSize = '1.5em';
}

var dd = document.getElementsByTagName("dd");
dd[0].style.color = "blue";
dd[1].style.color = "yellow";
dd[2].style.color = "green";
dd[3].style.color = "orange";                              


var parent = document.getElementById("divTP3");
var rmv = document.querySelectorAll("p")[1];
parent.removeChild(rmv);

var c = document.getElementById("click");
c.addEventListener('click', mafonction)

function mafonction(){
  alert("bien")
}