let listaDeNumerosSorteados = [];
let numeroLimite = 10
let numerosecreto = gerarNumeroAleatorio();
let tentativas = 1;

function gerarNumeroAleatorio() {
    let numeroEcolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

if (quantidadeDeElementosNaLista == numeroLimite) {
    listaDeNumerosSorteados = [];
}

    if (listaDeNumerosSorteados.includes(numeroEcolhido)) {
        return gerarNumeroAleatorio()
    } else{
        listaDeNumerosSorteados.push(numeroEcolhido);
            return numeroEcolhido;
        }
    }

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function mensagemInstrucoes() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Tente adivinhar o número secreto entre 1 e 10.');
}

function limparcampo() {
    chute=document.querySelector('input');
    chute.value='';
}

mensagemInstrucoes();

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numerosecreto) {
        exibirTextoNaTela('h1', 'Parabéns! Você acertou!');
        let palavraTentativa = tentativas >1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `você acertou em ${tentativas} ${palavraTentativa}.`;
        exibirTextoNaTela('p', `O Número secreto era ${numerosecreto}, ${mensagemTentativas}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else {
        if(chute >numerosecreto) {
        exibirTextoNaTela('h1', 'Que pena! Você errou!');
        exibirTextoNaTela('p', `O número Secreto é menor que  ${chute}.`);
        }else {
            exibirTextoNaTela('h1', 'Que pena! Você errou!');
            exibirTextoNaTela('p', `O número Secreto é maior que  ${chute}.`);}
            limparcampo();
    }
    tentativas ++;
     
}

function reiniciarJogo() {
    console.log('Botão novo jogo clicado');
    numerosecreto = gerarNumeroAleatorio();
    limparcampo();
    tentativas = 1;
    mensagemInstrucoes();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}