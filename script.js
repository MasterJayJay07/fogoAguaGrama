const gramaBtn = document.getElementById('grama')
const aguaBtn = document.getElementById('agua')
const fogoBtn = document.getElementById('fogo')
const buttons = document.getElementsByClassName('btn')
let result = gramaBtn.innerText

for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', function(){
        let atual = buttons[i].innerText
        let resultado = ""
        if(atual === result){
            resultado = "vitória"
        }
        else{
            resultado = "derrota"
        }
        console.log(resultado)
        return resultado
    })
}


