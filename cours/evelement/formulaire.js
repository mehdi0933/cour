const VERIF = document.getElementById("verifier");
const RESET = document.getElementById("reinitialiser");
const SEND = document.getElementById("envoyer");

const CHOIX1 = document.getElementById("choix1");
const CHOIX2 = document.getElementById("choix2");
const CHOIX3 = document.getElementById("choix3");

const QUTE1 = document.getElementById("qte-choix1");
const QUTE2 = document.getElementById("qte-choix2");
const QUTE3 = document.getElementById("qte-choix3");


// let sousTotal1 = document.getElementById("sous-total1").value;
let sousTotal1 = 0;
let sousTotal2 = 0;
let sousTotal3 = 0;

let sousTotalG = 0;
let totalTTC = 0;

RESET.addEventListener('click', () => {
  document.forms[0].reset();
})


VERIF.addEventListener('click', () => {
  verifier();
})


CHOIX1.addEventListener("change", () => {
  choix(1);
});

CHOIX2.addEventListener("change", () => {
  choix(2);
});

CHOIX3.addEventListener("change", () => {
  choix(3);
});

QUTE1.addEventListener('change', () => {
  choix(1);
})

QUTE2.addEventListener('change', () => {
  choix(2);
})

QUTE3.addEventListener('change', () => {
  choix(3);
})

// function choix1(){
//   let prix;
//   let qte;
//   switch(document.getElementById("choix1").value){
//     case "Demi-journée":
//       prix = 8;
//       qte = document.getElementById('qte-choix1').value;
//       sousTotal1 = prix * qte;
//       document.getElementById("sous-total1").value = sousTotal1;
//       break;
//     case "Journée":
//       prix = 15;
//       qte = document.getElementById('qte-choix1').value;
//       sousTotal1 = prix * qte;
//       document.getElementById("sous-total1").value = sousTotal1;
//       break;
//     default:
//       prix = 7;
//       qte = document.getElementById('qte-choix1').value;
//       sousTotal1 = prix * qte;
//       document.getElementById("sous-total1").value = sousTotal1;
//   }
//   sousTotalGlobal()
// }

// function choix2(){
//   let prix;
//   let qte;
//   switch(document.getElementById("choix2").value){
//     case "Demi-journée":
//       prix = 8;
//       qte = document.getElementById('qte-choix2').value;
//       sousTotal2 = prix * qte;
//       document.getElementById("sous-total2").value = sousTotal2;
//       break;
//     case "Journée":
//       prix = 15;
//       qte = document.getElementById('qte-choix2').value;
//       sousTotal2 = prix * qte;
//       document.getElementById("sous-total2").value = sousTotal2;
//       break;
//     default:
//       prix = 7;
//       qte = document.getElementById('qte-choix2').value;
//       sousTotal2 = prix * qte;
//       document.getElementById("sous-total2").value = sousTotal2;
//   }
//   sousTotalGlobal()
// }

// function choix3(){
//   let prix;
//   let qte;
//   switch(document.getElementById("choix3").value){
//     case "Demi-journée":
//       prix = 8;
//       qte = document.getElementById('qte-choix3').value;
//       sousTotal3 = prix * qte;
//       document.getElementById("sous-total3").value = sousTotal3;
//       break;
//     case "Journée":
//       prix = 15;
//       qte = document.getElementById('qte-choix3').value;
//       sousTotal3 = prix * qte;
//       document.getElementById("sous-total3").value = sousTotal3;
//       break;
//     default:
//       prix = 7;
//       qte = document.getElementById('qte-choix3').value;
//       sousTotal3 = prix * qte;
//       document.getElementById("sous-total3").value = sousTotal3;
//   }
//   sousTotalGlobal()
// }

function choix(choix){
  let prix;
  let qte;
  switch(document.getElementById("choix"+choix).value){
    case "Demi-journée":
      prix = 8;
      qte = document.getElementById('qte-choix'+choix).value;
      sousTotal3 = prix * qte;
      document.getElementById("sous-total"+choix).value = sousTotal3;
      break;
    case "Journée":
      prix = 15;
      qte = document.getElementById('qte-choix'+choix).value;
      sousTotal3 = prix * qte;
      document.getElementById("sous-total"+choix).value = sousTotal3;
      break;
    default:
      prix = 7;
      qte = document.getElementById('qte-choix'+choix).value;
      sousTotal3 = prix * qte;
      document.getElementById("sous-total"+choix).value = sousTotal3;
  }
  sousTotalGlobal()
}


function sousTotalGlobal(){
  sousTotalG = sousTotal1 + sousTotal2 + sousTotal3;
  document.getElementById("sous-total-HT").value = sousTotalG;
  totalTtc();
}

function totalTtc(){
  totalTTC = sousTotalG + 0.2 * sousTotalG;
  document.getElementById("total-TTC").value = totalTTC;
}

function verifier(){
  let v;
  if(document.getElementById("nom").value == ''){
    document.getElementById("nom").style.borderColor = "red";
    v = false;
  }
  else{
    document.getElementById("nom").style.borderColor = "";
    v = true;
  }
  if(document.getElementById("email").value == ""){
    document.getElementById("email").style.borderColor = "red";
    v = false;
  }else{
    document.getElementById("email").style.borderColor = "";
    v = true;
  }
  if(!document.getElementById('cdg').checked){
    document.getElementById('condition').style.color = "red";
    v = false;
  }else{
    document.getElementById('condition').style.color = "black";
    v = true;
  }
  return v;
}

SEND.addEventListener("click", () => {
  if(verifier()){
    alert("commande envoyee.")
  }else{
    alert("error");
  }
})