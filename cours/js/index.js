// // var a;
// // var b = 250;
// // var c = 'hello world';
// // var b;
// // var d;
// // console.log(b);
// // console.log(d);

// // {
// //     var nom = 'dupont';
// // }
// // console.log(nom);

// // // let nom = "dumont";
// // // let nom;
// // {
// //     let prenom = "mehdi";
// // }
// // console.log(prenom);

// // let age = 10;
// // age = 12 ;


// // const g = 9.8;
// // // const g ;
// // {
// //     const pi = 3.14
// // }
// // console.log(pi)

// let num = 255;
// let txt = "255";
// let bin = true;
// let flt = 7.23;
// console.log(typeof(f))

// var message ="bonjour le monde";
// let long = message.length;
// console.log(long)
// // console.log(message.charAt(2))
// console.log(message[2])

// let a = 20;
// let b = 20;

// if (a>b){
//     console.log(a +' est supperieur  '+ b)
// }else{
//     console.log(a +' est inferieur '+ b)
// }


// if (a > b) {
//     console.log('a est supperieur  b')
// } else if (a < b) {
//     console.log('a est inferieur b')
// } else {
//     console.log('a egale b')
// }


// exercice :
// ecrire un programe qui permet d'afficher le jour de la semaine en fonction d'un chiffre donne
// 0 => Dimanche
// 1 => lundi 
// 2 => mardi
// 3 => mercredi
// 4 => jeudi
// 5 => vendredi
// 6 => samedi 

//solution

// let nmb = 7;

// switch (nmb) {
//     case 0:
//         console.log('dimanche')
//         break;
//     case 1:
//         console.log('lundi')
//         break;
//     case 2:
//         console.log('mardi')
//         break;
//     case 3:
//         console.log('mercrdi')
//         break;
//     case 4:
//         console.log('jeudi')
//         break;
//     case 5:
//         console.log('vendredi')
//         break;
//     case 6:
//         console.log('samedi')
//         break;
//     default:
//         console.log('jour inconnu');
// }


// // Exercice :
// Indiquez la valeur des 4 variables de ce programme à l’issue de son exécution :
// (pour y arriver, faites un tableau avec les colonne a, b, c et d)
// let a = 3;
// let b = a * 2;
// let c = b - a;
// let d = b + c;

// // let tableau = [a,b,c,d];

// a = d + a;
// b = b + 2;
// c = b -a;
// d = d + d;
// b = d - a;
// a = d + a;
// c = c + a;
// b = 3 + a;



// let lo=5;
// let la=3;
// let h=4                                                     ;
// let v =lo*la*h;

// console.log('le voleume est : '+ v)
 


// let nombre1 = 10;
// let nombre2 = 20;
// let reseulta = nombre2 +nombre1;

// alert(nombre1 +' + '+nombre2+' = '+reseulta)


// let nmb =10 ;


// if(nmb % 2 == 0){
//     console.log('jsuis la')
// }else{
//     console.log('pas bn')
// }

// let nbr =17;
// if(nbr%2 == 0)
// {
//     console.log("Nombre pair");
// }
// else
// {
//     console.log("Nombre impair");
// }
// let char ="*"

// for(let i = 1 ;i<=10 ;i++){
//     console.log(char)
//      char = char +"*";
// }
// let number = prompt('met un nombre');
// for(let i = 0 ; i<=number;i++){
//     if (number % 2 == 0 ){
// console.log(i)
//     }
// }

// let age = prompt("ton age ?")
// console.log(age)


// function anneebissextile (annee){
    
// if((annee%4 === 0 && annee%100 != 0)|| annee % 400 === 0 ){

//     console.log( "annee bissextile")

// }else{
//     console.log('annee pas bissextile');
// }
// }
// let annee =  2016
// anneebissextile(annee)

//   function nombres(tableau){
// for ( let i = 0;i <tableau.length; i++){
//   somme = 0
//   tableau+=somme
// }
// return somme;

//   }
//   let tableau = [1,2,3,4,5,6,7,8,9,0]
//   nombres(tableau)
// // console.log(nombres(tableau))


// tab = [3, 6, 1, 9, 2];
// const sortDesc = (a, b) => b - a;
// tab.sort(sortDesc);
// console.log(tab);


let mots = 'ma chaine de carractere'

function reverseWrold(mot){
      // return chaine.split("").reverse().join("");
    let tab = mot.split('');
    let reverstab = tab.reverse();
    let res = reverstab.join('');
    return res;
}
let motInverse = reverseWrold(mots)
console.log(motInverse)

// function reverseWord(chaine){
//     // return chaine.split("").reverse().join("");
//     let tab = chaine.split('');
//     let reverstab = tab.reverse();
//     let res = reverstab.join('');
//     return res;
//   }
  
//   console.log(reverseWord("Hello World!"));