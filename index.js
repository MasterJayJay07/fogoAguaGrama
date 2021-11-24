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


//Css do Projeto, gerar div ou section com as opções escritas: vitória, derrota ou empate;
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

//Função pra dar reload na pagina e começar a jogar novamente.

function reload(){
    return document.location.reload(true);
}

const buttonReloadVitoria = document.getElementById('reload-vitoria');
const buttonReloadDerrota = document.getElementById('reload-derrota');
const buttonReloadEmpate = document.getElementById('reload-empate');
buttonReloadVitoria.addEventListener('click', reload);
buttonReloadDerrota.addEventListener('click', reload);
buttonReloadEmpate.addEventListener('click', reload);


