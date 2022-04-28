// faz aparecer a caixa referente à resposta 1
var primeiraCaixa = document.getElementById('caixa-da-etapa-2');
primeiraCaixa.style.display = 'flex';

var finalFeliz = document.getElementById('caixa-da-etapa-2-1');
var bombeiros = document.getElementById('caixa-da-etapa-2-2');

// definição dos botoes
var botaoIntensidade = document.getElementById('quantidade-chuva');
var botaoProximo = document.getElementById('proxima-etapa');
//botao de restart
var botaoRestart = document.getElementById('reinicia-jogo')
botaoRestart.onclick = function () {
    window.location.href = '../../index.html';
}


botaoProximo.onclick = function () {
    var answer = prompt("O que Jake faz? \
    \n1 - Se transforma e consegue sair da festa \
    \n2 - Liga para os bombeiros");


    while (answer != 1 && answer != 2) {
        var answer = prompt("O que Jake faz? \
        \n1 - Se transforma e consegue sair da festa \
        \n2 - Liga para os bombeiros");
    }
    // esconde a div que está sendo mostrada atualmente
    primeiraCaixa.style.display = 'none';
    // faz aparecer cada bloco de acordo com a resposta.
    if (answer == 1) {
        // mostra e esconde divs segundo a lógica pós resposta
        bombeiros.style.display = 'none';
        finalFeliz.style.display = 'flex';
        botaoProximo.style.display = 'none';
        botaoRestart.style.display = 'flex';
    } else if (answer == 2) {
        // mostra e esconde divs segundo a lógica pós resposta
        finalFeliz.style.display = 'none';
        bombeiros.style.display = 'flex';
        botaoProximo.style.display = 'none';
        botaoRestart.style.display = 'flex';
    }
    
}


