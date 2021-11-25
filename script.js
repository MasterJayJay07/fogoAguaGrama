const buttons = document.getElementsByClassName('btn')
const main = document.getElementById('main');
const button = document.createElement('button');
button.classList.add('estilo-button');
button.innerText = 'Jogar'
main.appendChild(button);

//variável que será usada para validar com a escolha da máquina
let escolhaAtual = ""
let elementoMaquina = "";

const arrElementos = ['Grama', 'Agua', 'Fogo'];

function marcarPai(e){
    let cel = e.parentElement
    cel.classList.toggle("clicado")
}

//função que adiciona um valor ao elementoMaquina
function gerarNumeroRandomico(){
    return Math.floor(Math.random() * 3);
}

function gerarElementoMaquina(){
    elementoMaquina = arrElementos[gerarNumeroRandomico()];
    return elementoMaquina
}

//função que pega o texto do elemento clicado
function marcarEscolha(e){
    let cel = e.innerText
    return cel
}

//loop que adiciona uma função que adiciona o texto do botão clicado
//na variável escolhaAtual
for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', function(){
        let atual = marcarEscolha(buttons[i])
        escolhaAtual=atual
    })
}

//
// function telaDeResutado(valor){
//     if(valor === 'vitoria'){
//         const vit = document.getElementById('vitoria');
//         vit.classList.remove('display')
//     }
//     if(valor === 'derrota'){
//         const vit = document.getElementById('derrota');
//         vit.classList.remove('display')
//     }
//     if(valor === 'empate'){
//         const vit = document.getElementById('empate');
//         vit.classList.remove('display')
//     }
// }
//
button.addEventListener("click", function(){
    let escolhaDoJogador = escolhaAtual
    let escolhaDaMaquina = gerarElementoMaquina()
    let ganhouOuNao = ""
    console.log(escolhaDoJogador)
    console.log(escolhaDaMaquina)
    if(escolhaDoJogador===escolhaDaMaquina){
        ganhouOuNao = 'empate'
    }
    if(escolhaDoJogador==="Grama" && escolhaDaMaquina==="Agua"){
        ganhouOuNao = 'vitoria'
    }
    if(escolhaDoJogador==="Grama" && escolhaDaMaquina==="Fogo"){
        ganhouOuNao = 'derrota'
    } 
    if(escolhaDoJogador==="Agua" && escolhaDaMaquina==="Fogo"){
        ganhouOuNao = 'vitoria'
    }
    if(escolhaDoJogador==="Agua" && escolhaDaMaquina==="Grama"){
        ganhouOuNao = 'derrota'
    }
    if(escolhaDoJogador==="Fogo" && escolhaDaMaquina==="Grama"){
        ganhouOuNao = 'vitoria'
    }
    if(escolhaDoJogador==="Fogo" && escolhaDaMaquina==="Agua"){
        ganhouOuNao = 'derrota'
    }

    //validação que abre a tela do resultado
    let valor = ganhouOuNao
    if(valor === 'vitoria'){
        const vit = document.getElementById('vitoria');
        vit.classList.remove('display')
    }
    if(valor === 'derrota'){
        const vit = document.getElementById('derrota');
        vit.classList.remove('display')
    }
    if(valor === 'empate'){
        const vit = document.getElementById('empate');
        vit.classList.remove('display')
    }
})

