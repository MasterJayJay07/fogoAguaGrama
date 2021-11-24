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
