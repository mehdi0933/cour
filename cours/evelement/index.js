const NOM = document.getElementById("nom");
const PRENOM = document.getElementById("prenom");
const PSEUDO = document.getElementById("pseudo");
const PSWD = document.getElementById("pswd");
const PSWD1 = document.getElementById("pswd2");
const BTN = document.getElementById("valider");

NOM.addEventListener('blur', () => {
  if(NOM.value == ''){
    NOM.style.borderColor = "red";
  }
})

PRENOM.addEventListener('blur', () => {
  if(PRENOM.value == ''){
    PRENOM.style.borderColor = "red";
  }
})


PSEUDO.addEventListener('blur', () => {
  if(PSEUDO.value == ''){
    PSEUDO.style.borderColor = "red";
  }
})

PSWD.addEventListener('blur', () => {
  if(PSWD.value == ''){
    PSWD.style.borderColor = "red";
  }
})

PSWD1.addEventListener('blur', () => {
  if(PSWD1.value == ''){
    PSWD1.style.borderColor = "red";
  }
})


BTN.addEventListener('click', (e) => {
  e.preventDefault();
  if(PSWD.value != PSWD1.value){
    var txt = document.createTextNode("les mot de passe ne sont pas conforme");
    document.getElementById("error").appendChild(txt);
    document.getElementById("error").style.color = "red";
  }else{
    var txt = document.createTextNode("les mot de passe sont conforme");
    document.getElementById("error").appendChild(txt);
    document.getElementById("error").style.color = "green";
  }
})