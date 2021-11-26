let mystere = null;
let nbEssai =0;

document.getElementById('nouveau_jeu').addEventListener('click',function(){
    console.log('nouveau_jeu')
mystere = Math.floor(Math.random()*50)
console.log(mystere)
})
document.getElementById('solution').addEventListener('click',function(){
    console.log('solution')
})
document.getElementById('btnpropose').addEventListener('click',function(){
    
    let propose = document.getElementById('propose').value
    if(mystere==propose){
        document.getElementById('message').value='bien'
    }else{
        if(mystere<propose){
            document.getElementById('message').value='plus petit'
        }
    }
      if(mystere>propose){
        document.getElementById('message').value='plus grand'
    }


  

})

// let essai = 0 ;
// function essaie(){
// essai++
// document.getElementById("n°essai").textContent   = essai;
// document.getElementById("btnpropose").addEventListener("click", essaie);
// }




//