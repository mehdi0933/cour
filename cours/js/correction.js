// var a;
// var b = 250;
// var c = "hello world!";

// var b;
// console.log(b);

{
    var nom = "Dupond";
  }
  
  console.log(nom);
  
  
  
  // let prenom = "diokel";
  // let prenom;
  
  {
    let prenom = "diokel";
  }
  
  // console.log(prenom);
  
  const g = 9.8;
  
  {
    const pi = 3.14;
  }
  
  const tva = 18;
  // tva = 20;
  
  
  // var a = 20;
  // var b = 20;ables suivantes
  // num qui contient le nombre 255
  // txt qui contient la chaîne de caractère 255
  // bin qui contient la valeur booléenne vraie
  // flt qui contient la valeur 7,23
  
  // solution :
  let num = 255;
  let txt = "255";
  let bin = true;
  let flt = 7.23;
  
  
  // afficher le message "le text est 255"
  console.log(typeof(txt));
  console.log("le text est "+txt);
  
  var message = "Bonjour le monde";
  let long = message.length;
  
  console.log(long);
  
  console.log(message.charAt(2));
  console.log(message[2]);
  
  
  // Donnez la valeur des variables ta, tb, tc, td, te et tf après l’exécution du code JavaScript suivant.
  // var a = 5;
  // var b = true;
  // var c = "Hello";
  // var d;
  // var e = true;
  
  // var ta = typeof a; // number
  // var tb = typeof b; // boolean
  // var tc = typeof c; // string
  // var td = typeof d; // undefined
  // var te = typeof e; // boolean
  // var tf = typeof f; // undefined
  
  
  // // Donnez la valeur des variables après l’exécution du code JavaScript suivant.
  // var u = "La réponse est " + 42; // la reponse est 42
  // var v = 42 + " est la réponse";  // 42 est la reponse
  // var w = "20" + 7;  // 207 
  
  // var a = 20;
  // var b = 20;
  
  // if(a < b){
  //   console.log("a est inferieur a b");
  // }
  
  // if(a > b){
  //   console.log("a est supperieur a b");
  // }else{
  //   console.log("a n'est pas supperieur a b");
  // }
  
  // if(a>b){
  //   console.log("a est supperieur a b");
  // }else if(a < b ){
  //   console.log("a est inferieur a b");
  // }else{
  //   console.log("a est egale a b");
  // }
  
  // 1 Affichez les chaines de caractères suivantes et leur longueur sur la console.
  // 2 Affichez le caractère à l'indice 5 pour chaque chaine.
  // let a = 'Bonjour';
  // let b = 'je m\'appelle ';
  // let c = 'ken le survivant';
  
  // solution
  // console.log(a +" longueur de la chaine" + a.length);
  // console.log(b +" longueur de la chaine" + b.length);
  // console.log(c +" longueur de la chaine" + c.length);
  
  // console.log(a.charAt(5));
  // console.log(b.charAt(5));
  // console.log(c.charAt(5));
  
  
  // exercice :
  // ecrire un programe qui permet d'afficher le jour de la semaine en fonction d'un chiffre donne
  // 0 => Dimanche
  // 1 => lundi 
  // 2 => mardi
  // 3 => mercredi
  // 4 => jeudi
  // 5 => vendredi
  // 6 => samedi 
  
  
  // solution
  // let nb = 3;
  // console.log(nb)
  // if(nb == 0){
  //   console.log("Dimanche");
  // }else if(nb == 1){
  //   console.log("lundi");
  // }else if(nb == 2){
  //   console.log("Mardi");
  // }else if(nb == 3){
  //   console.log("Mercredi");
  // }else if(nb == 4){
  //   console.log("Jeudi");
  // }else if(nb == 5){
  //   console.log("Vendredi");
  // }else if(nb == 6){
  //   console.log("Samedi");
  // }else{
  //   console.log("jour inconnu");
  // }
  
  
  // switch (nb) {
  //   case 0:
  //   console.log("Dimanche");
  //     break;
  //   case 1:
  //     console.log("Lundi");
  //     break;
  //   case 2:
  //     console.log("Mardi");
  //     break;
  //   case 3:
  //     console.log("Mercredi");
  //     break;
  //   case 4:
  //     console.log("Jeudi");
  //     break;
  //   case 5:
  //     console.log("Vendredi");
  //     break;
  //   case 6:
  //     console.log("Samedi");
  //     break;
  //   default:
  //     console.log("jour inconnu");
  // }
  
  
  // let age = 19;
  // let statut = (age <= 18) ? "mineur" : "adult";
  // console.log(statut);
  
  // Exercice :
  // Indiquez la valeur des 4 variables de ce programme à l’issue de son exécution :
  // (pour y arriver, faites un tableau avec les colonne a, b, c et d)
  // let a = 3;
  // let b = a * 2;
  // let c = b - a;
  // let d = b + c;
  // a = d + a;
  // b = b + 2;
  // c = b -a;
  // d = d + d;
  // b = d - a;
  // a = d + a;
  // c = c + a;
  // b = 3 + a;
  
  // solution
  // a = 30
  // b = 33
  // c = 24
  // d = 18
  
  
  for(let i = 1; i <= 5; i++){
    console.log(i)
  }
  
  let i = 1;
  
  while(i <= 5){
    console.log(i);
    i++;
  }
  
  do{
    console.log(i);
    i++;
  }while(i <= 5);
  
  // Exercice :
  // Ecrire un programme informatique en Javascript qui calcule le volume d’un parallélépipède rectangle.
  // On demande de saisir les 3 dimensions, et le logiciel affiche le volume en mm3.
  // On rappelle que la formule pour calculer le volume est : Volume = largeur x longueur x hauteur.
  // Pour y arriver : Declarer les 4 variables (largeur, longueur, hauteur et volume)
  
  // solution:
  let lo = 5;
  let la = 3;
  let h = 4;
  let v = la * lo * h;
  
  console.log("le volume est :" +  v);
  
  // Exercice :
  // Créez 2 variables nom_etudiant et prenom_etudiant auxquelles vous affecterez respectivement votre nom et prénom. Vous afficherez dans la console le message suivant : "Bonjour, je m'appelle prenom_etudiant nom_etudiant".
  
  // solution:
  let nom_etudiant = "Ngom";
  let prenom_etudiant = "Abraham";
  console.log("Bonjour je m'appelle "+ prenom_etudiant+" "+nom_etudiant);
  // Exercice :
  // Créez 2 variables nombre1 et nombre2 auxquelles vous affecterez respectivement des valeurs numériques. Vous en calculerez la somme dont vous affecterez la variable somme et vous afficherez dans une fonction alert() le message suivant : "La somme de nombre1 et de nombre2 est resultat".
  let nombre1 = 5;
  let nombre2 = 3;
  let somme = nombre1 + nombre2;
  // console.log(somme);
  
  
  // var x = "20" + 3;
  // console.log(x);
  
  // qu'affiche la console apres l'execution du code suivat
  // {
  //   let x = 10;
  // }
  // console.log(x) // erreur
  
  // // qu'affiche la console apres l'execution du code suivat
  // {
  //   var x = 10;
  // }
  // console.log(x) // 10
  
  // // qu'affiche la console apres l'execution du code suivat
  // {
  //   const x = 10;
  // }
  // console.log(x) //erreur
  
  // // ce code est il correct ? si oui qu'affiche la console ?
  // const a = "Toto";
  // {
  //   a = 3;
  // }
  // console.log(a);
  
  // ce code est il correct ? si oui qu'affiche la console ?
  // let a = 8;
  // {
  //   a = 3;
  // }
  // console.log(a);
  // let v = 1;
  // {
  //   let v = 3;
  // }
  
  // console.log()
  
  // Exercice :
  // soit le nombre nbr ecrire un programme qui permet de tester si le nombre nbr est paire
  // un nombre est paire si le reste de la division entre ce nombre et 2 egal 0.
  // solution :
  
  let nbr = 17;
  if(nbr % 2 == 0){
    console.log("paire");
  }else{
    console.log("impaire");
  }
  
  // soit un nombre ecrire un programme qui permet de verifier si le nombre est divible par 5 et par 3
  // si divisible par les 2 afficher "le nombre est divisible par 5 et 3"
  // si divisible que par 5 afficher "le nombre est divisible que par 5"
  // si divisible que par 3 afficher "le nombre est divisible que par 3"
  // dans le cas contraire afficher "le nombre n'est ni divisible par 3 ni par 5"
  
  // solution:
  var nbr1 = 15;
  if(nbr1 % 3 == 0 && nbr1 % 5 == 0){
    console.log("le nombre est divisible par 3 est 5");
  }else{
    if(nbr1 % 3 == 0){
      console.log("la nombre est divisible que par 3");
    }else if(nbr1 % 5 == 0){
      console.log("le nombre est divisible que apr 5");
    }else{
      console.log("le nombre n'est divisible ni par 3 ni par 5");
    }
  }
  
  // ercire le code qui permet d'obtenir l'affichage suivant
  // *
  // **
  // ***
  // ****
  // *****
  // ******
  // *******
  // ********
  // *********
  
  // solution:
  let char = "*";
  for(let i = 1; i <= 10; i++){
    console.log(char);
    char = char + "*";
  }
  
  // var age = window.prompt("votre age?");
  // console.log(age);
  
  // exercice:
  // ecrire un programme qui permet à l'utilsiateur de saisir deux nombre et un operateur
  // en fonction de l'operateur (+, -, /; %, *, **)
  // declarere un variable resultat qui va stocker le resultat entre les deux nombre ets l'opperateur choisi.
  // on demande a l'utilisateur de saisir un premier ensuite un deuxieme et en fin l'operateur
  
  // solution:
  // let n1 = Number(window.prompt("premier nombre"));
  // let n2 = Number(window.prompt("deuxieme nombre"));
  // let op = window.prompt("operateur");
  
  // switch(op){
  //   case "+":
  //     console.log(n1 + n2);
  //     break;
  //   case "-":
  //     console.log(n1 - n2);
  //     break;
  //   case "/":
  //     console.log(n1 / n2);
  //     break;
  //   case "%":
  //     console.log(n1 % n2);
  //     break;
  //   case "*":
  //     console.log(n1 * n2);
  //     break;
  //   case "**":
  //     console.log(n1**n2);
  //     break;
  //   default:
  //     console.log("operateur inconnu");
  // }
  
  // Exercice:
  // ecrire un programme qui demande à l'utilisateur de saisir un nombre entire
  // afficher tout les nombre paire qui se trouvent entre 0 et le nombre saisi
  
  // solution:
  // let n3 = Number(window.prompt("le nombre"));
  // for(let i = 0; i <= n3; i++){
  //   if(i % 2 == 0){
  //     console.log(i);
  //   }
  // }
  
  // exercice ecrire un programe qui demande a l utilisateur son age 
  // en fonction de l'age affecter a la variable statut "jeune" si l'age est < 18
  // et adulte si age est supperieur ou egal a 18
  
  // solution:
  // let age = Number(window.prompt("votre age"));
  // let statut;
  // statut = (age >= 18) ? "adulte": "jeune";
  
  // console.log(statut);
  
  
  function direBonjour(){
    console.log("Bonjour");
  }
  
  direBonjour();
  
  var nom = "Toto";
  
  function direBonjourNom(nom){
    console.log("Bonjour "+ nom);
  }
  
  
  
  direBonjourNom(nom);
  
  // exercice:
  // ecrire une fonction qui prend en paramettre une annee est affiche bissextile si l'annee est bissextile et pas bissextile si non
  // une annee bissextile est une (annee divisible par 4 et pas divisible par 100)
  // ou divisible par 400
  
  // solution:
  // function anneebissextile(annee){
  //   if((annee % 4 == 0 && annee % 100 != 0) || annee % 400 == 0){
  //     console.log("annee bissextile");
  //   }else{
  //     console.log("annee pas bissextile");
  //   }
  // }
  
  // function anneebissextile(annee){
  //   if(annee % 4 == 0 && annee % 100 != 0){
  //     console.log("annee bissextile");
  //   }else if(annee % 400 == 0){
  //     console.log("annee bissextile");
  //   }else{
  //     console.log("annee pas bissextile");
  //   }
  // }
  
  // let annee = 2016;
  // anneebissextile(annee);
  
  // soit une variable c
  // ecrire une fonction qui permet de determiner si cette variable est une consone , une voyelle ou un chiffre
  // voyelles : a, o, i, u, e, y
  // chiffres: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
  
  // solution:
  
  // function lettrechiffre(c){
  //   if(c== "a" || c == "o" || c == "i" || c == "u" || c == "e" || c == "y"){
  //     console.log("le caractere est une voyelle");
  //   }else if(c == 0 || c == 1 || c == 2 || c == 3 || c == 4 || c == 5 || c== 6 || c == 7 || c == 8 || c == 9 ){
  //     console.log("le caractere est un chiffre");
  //   }else{
  //     console.log("le caractere est une consone");
  //   }
  // }
  
  // let c = 0;
  // lettrechiffre(c);
  
  
  // exercice :
  // ecrire une fonction qui prend trois paramettres
  // les deux premier sont des nombre (a et b)
  // le troisieme un boolean (c)
  // si le paramettre c = true la fonction retourne le maximum entre a et b
  // si le paramettre c = false la fonction retourne le minimum entre a et b
  
  // solution:
  
  // function maxmin(a, b, c){
  //   let r;
  //   switch(c){
  //     case true:
  //       if(a > b)
  //         r = a;
  //       else 
  //         r = b;
  //       break;
  //     default:
  //       if(a < b)
  //         r = a;
  //       else
  //         r = b;
  //   }
  //   return r;
  // }
  
  // let a = 5, b = 7, c = false;
  // let result = maxmin(a, b, c);
  
  // console.log(result);
  
  // const fruits = [];
  // fruits[0] = "mangue";
  // fruits.push("banane");
  
  // console.log(fruits); // ['mangue', 'banane']
  
  // let chaine = fruits.toString();
  // console.log(chaine); // "mangue, banane"
  
  // let text = "bonjour le monde";
  // var tab = text.split(" ");
  // console.log(tab); // ['bonjour', 'le', 'monde']
  // fruits.pop();
  // console.log(fruits); // ['mangue']
  // fruits.unshift("fraise");
  // console.log(fruits); // ['fraise', 'mangue']
  // fruits.shift(); 
  // console.log(fruits); // ['fraise']
  
  // const numero = [0,3,2,7,8];
  // numero.sort();
  
  // console.log(numero); // [0, 2, 3, 7, 8]
  
  // numero.reverse();
  // console.log(numero); // [8, 7, 3, 2, 0]
  
  // exercice:
  // ecrire une fonction qui prend un tableau en paramettre et qui retourne la somme de tout les element du tableau.
  // le tableau sera compose que de nombre
  
  // solution
  // function sommetab(tab){
  //   let somme = 0;
  //   for(let i = 0; i < tab.length; i++){
  //     somme+=tab[i];
  //   }
  //   return somme;
  // }
  
  
  // const tab = [5, 12, 3, 7, 8];
  // let resultat = sommetab(tab);
  // console.log(resultat);
  
  // ecrire une fonction qui prend un tableau en paramettre et retourne la maximum de ce tableau
  // le tableau sera compose de nombre
  
  // solution
  
  // tab.sort()
  // console.log(tab);
  
  
  // function maxtab(t){
  //   let max = t[0];
  //   for(let i = 0; i < t.length; i++){
  //     if(max < t[i]){
  //       max = t[i];
  //     }
  //   }
  //   return max;
  // }
  
  
  // let maxt = maxtab(tab);
  // console.log(maxt);
  
  // EXERCICE 1
  
  
  
  // Ecrivez une fonction "verifSortAsc" qui prend en paramètre un tableau et vérifie qu'il est bien trié dans l'ordre ascendant. 
  // La fonction devra retourner "true" si c'est le cas, "false" sinon.
  
  // Exemples :
  // verifSortAsc(array) => doit retourner "false"
  // verifSortAsc(array2) => doit retourner "true"
  
  // solution:
  // function verifSortAsc(tab){
  //   let tab1 = [];
  //   for(let i = 0; i < tab.length; i++){
  //     tab1.push(tab[i]);
  //   }
  
  //   tab.sort();
  //   let tier = true;
  //   for(let i = 0; i < tab.length; i++){
  //     if(tab[i] != tab1[i]){
  //       tier = false;
  //     }
  //   }
  //   return tier;
  // }
  
  
  
  // function verifSortAsc(tab){
  //   let t = true;
  //   for(let i = 0, l = tab.length -1; i < l && t; i++){
  //     t = tab[i] <= tab[i+1];
  //   }
  //   return t;
  // }
  
  // console.log(verifSortAsc(array));
  // console.log(verifSortAsc(array2));
  
  // Ecrivez une fonction "reverseWord" qui prend une chaîne de caractères en paramètre et qui retourne la chaîne de caractères inversée.
  // Exemple :
  // reverseWord("Hello World!") => doit retourner "!dlroW olleH"
  
  // solution:
  function reverseWord(chaine){
    // return chaine.split("").reverse().join("");
    let tab = chaine.split('');  // tableau
    let reverstab = tab.reverse(); // inverser le tableau
    let res = reverstab.join(''); // transformer en chaine caractere
    return res;
  }
  
  // console.log(reverseWord("Hello World!"));
  
  
  // Ecrivez une fonction "verifSort" qui prend en paramètre un tableau ainsi qu'un booléen "asc". Si "asc" est "true", on vérifie que le tableau passé en paramètre est trié par ordre ascendant, sinon par ordre descendant.
  // Faites en sorte que si l'on ne passe pas de deuxième paramètre, le critère de vérification soit ascendant par défaut.
  
  const array = [1, 12, 3, 67, 1, 23, 0, 87];
  const array2 = [1, 1, 2, 3, 4, 5];
  const array3 = [0];
  const array4 = ['never gonna', 'give you', 'up'];
  const array5 = ['never gonna', 'let you', 'down'];
  // Exemples :
  // verifSort(array, true) => doit retourner "false"
  // verifSort(array3) => doit retourner "true"
  // verifSort(array2, true) => doit retourner "true"
  // verifSort(array3, false) => doit retourner "true"
  // verifSort(array5, false) => doit retourner "true"
  
  
  // solution
  // function verifSort(tab, asc = true){
  //   let tab1 = [];
  //   let res = true;
  //   for(let i = 0; i < tab.length; i++){
  //     tab1[i] = tab[i];
  //   }
  
    
  //   if(asc == true){
  //     tab1.sort();
  //     for(let i = 0; i < tab1.length; i++){
  //       if(tab1[i] != tab[i]){
  //         res = false;
  //         break;
  //       }
  //     }
  //   }else{
  //     tab1.sort();
  //     tab1.reverse();
  //     console.log(tab1);
  //     console.log(tab);
  //     for(let i = tab.length - 1; i >= 0; i--){
  //       if(tab1[i] != tab[i]){
  //         res = false;
  //         break;
  //       }
  //     }
  //   }
  //   return res;
  // }
  
  // console.log(verifSort(array5, false));
  
  // Ecrivez une fonction "reverseArray" qui prend en paramètre un tableau et qui retourne ledit tableau inversé.
  // Exemple :
  // reverseArray(["Hello", "World!"]) => doit retourner ["World!", "Hello"]
  
  // solution
  function reverseArray(tab){
    return tab.reverse();
  }
  
  // console.log(reverseArray(["Hello", "World!"]));
  
  // Ecrivez une fonction "reverseWords" qui prend en paramètre un nombre indéfini de paramètres étant des chaînes de caractères (et non pas un tableau de chaînes de caractères) et qui retourne, cette fois-ci, un tableau contenant chaque mot inversé.
  
  // Exemple :
  // reverseWords("Hello", "World!") => doit retourner ["olleH", "!dlroW"]
  
  function reverseWords(){
    for(let i = 0; i < arguments.length; i++){
      let e = arguments[i];
      arguments[i] = e.split('').reverse().join('');
    }
    return arguments;
  }
  
  console.log(reverseWords("Hello", "World!"));
  
  
  // À l'aide des trois fonctions écrites précédemment, écrivez une fonction qui prend en paramètre le tableau suivant et retourne ledit tableau inversé, de même que tous les mots qu'il contient.
  const words = [
    's.e.têrp', 'sap',
    "setê'n",   'suoV',
    'ces',      'redoc',
    'av',       'aç',
    'eénna',    'etteC'
  ]
  
  function reverseAll(tab){
    tab = reverseArray(tab);
    const t = [];
    for(let i = 0; i < tab.length; i++){
      let elmt = reverseWord(tab[i]);
      t.push(elmt);
    }
    return t;
  }
  
  console.log(reverseAll(words));