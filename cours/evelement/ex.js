document.getElementById('refrain').addEventListener('click',function(){
let refrain = document.getElementsByClassName('refrain')
for(let i =0 ; i< refrain.length;i++ ){
    
    refrain[i].style.color ='blue'
}
})

document.getElementById('couplet').addEventListener('click',function(){
    let couplet = document.getElementsByClassName('couplet')
    for(let i =0 ; i< couplet.length;i++ ){
        
        couplet[i].style.color ='red'
    }
    })