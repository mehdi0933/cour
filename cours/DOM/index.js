      
// // ecrire le code javscript qui permet de recuperer l'ensemble des balise div du documment html
// // ecrire le code js permettant de recuperer la premiere balise div
// // ecrire le code js permettant de recuperer la balise h1

// // 
let h1 = document.getElementsByClassName('h1')
console.log(h1)
let d1 = document.getElementsByName('3')
console.log(d1)
let ta = document.querySelectorAll('div')
console.log(ta)


// // exercice:
// // ecrire le code js permettant d'ajouter un attribut class a la premiere balise div du documment 
// // ecrire le code js permettant de verifier si l'element a possede un attribut href
// // ecrire le code js permettant de recuperer la valeur de l'attibut href de la balise a
// // ecrire le code js permettant de recuperer l'ensemble des fomulaire du document 
// // ecrire le code js permettant de de supprimer l'attibut id du paragraphe si il en a 

// // solution

let dd = document.querySelector('div')
dd.setAttribute('id','div1')
var a = document.querySelector('a')
if (a.hasAttribute('href')){
    console.log('yes')
}else{
    console.log('noooo')
}

let ahref =a.getAttribute('href')
console.log(ahref)
let f = document.forms

// let pp = document.querySelector('p')
// if(p.hasAttribute("id")){
//     p.removeAttribute("id");
//   }

//   let label =  document.querySelector('label')
// var labelv = label.htmlFor;
// let  div21= document.querySelectorAll("div")[0]
// div21.style.color='blue'

// function traduction (p1, nouveauText){
//     elmnt = document.getElementById(p1)
//     elmnt.innerHTML = nouveauText

// } 

// function traduction(id, nouveauText){
    elmnt = document.getElementById(id);
    var sp = document.createElement("span");
    var txt = document.createTextNode("bonjour monde !");
    // elmnt.appendChild(sp);
    // sp.appendChild(txt);
//   }