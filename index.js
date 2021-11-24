//Fazer a máquina escolher um valor aleatório e atribuir a uma variável.

const arrElementos = ['Grama', 'Àgua', 'Fogo'];
let elementoMaquina = "";

function gerarElementoMaquina(){
    elementoMaquina = arrElementos[gerarNumeroRandomico()];
    console.log(elementoMaquina)
    return elementoMaquina;
    
}

function gerarNumeroRandomico(){
    return Math.floor(Math.random() * 3);
}

//Criar botão de jogar para chamar a o geradorElementoMaquina.
const main = document.getElementById('main');
const button = document.createElement('button');
button.innerText = 'Jogar'
button.addEventListener('click', gerarElementoMaquina);
main.appendChild(button);


//O que a condição de vitória faz?
//Tipo, o cara venceu, o que acontece? aparece uma tela de vitória com uma imagem e um texto dizendo parabéns.

//Gerar tela de condição de vitória.

function telaDeResutado(valor){
    if(valor === 'vitoria'){
        const vit = document.getElementById('vitoria');
        vit.classList.add('display')
    }
    if(valor === 'derrota'){
        const vit = document.getElementById('derrota');
        vit.classList.add('display')
    }
    if(valor === 'empate'){
        const vit = document.getElementById('empate');
        vit.classList.add('display')
    }
    
}


//Css do Projeto, gerar div ou section com as opções escritas: vitória, derrota ou empate;
