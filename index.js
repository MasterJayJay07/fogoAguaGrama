const mensagens = document.getElementsByClassName("btns")

function reload(){
    for(let i=0; i<mensagens.length; i++){
        mensagens[i].classList.add("display")
    }
}

const buttonReloadVitoria = document.getElementById('reload-vitoria');
const buttonReloadDerrota = document.getElementById('reload-derrota');
const buttonReloadEmpate = document.getElementById('reload-empate');
buttonReloadVitoria.addEventListener('click', reload);
buttonReloadDerrota.addEventListener('click', reload);
buttonReloadEmpate.addEventListener('click', reload);