// faz aparecer a caixa referente à resposta 1
var primeiraCaixa = document.getElementById('caixa-da-etapa-1');
primeiraCaixa.style.display = 'flex';

var reinoFogo = document.getElementById('caixa-da-etapa-1-1');
var festa = document.getElementById('caixa-da-etapa-1-2');


var botaoProximo = document.getElementById('proxima-etapa');
botaoProximo.onclick = function () {
    var answer = prompt("Onde ele deve investigar o incêndio? \
    \n1 - No Reino do Fogo \
    \n2 - Na própria festa");
    
    while (answer != 1 && answer != 2) {
        var answer = prompt("Onde ele deve investigar o incêndio? \
                        \n1 - No Reino do Fogo \
                        \n2 - Na própria festa");
    }
     
    
    // esconde a div que está sendo mostrada atualmente
    primeiraCaixa.style.display = 'none';
    // faz aparecer cada bloco de acordo com a resposta.
    if (answer == 1) {
        // mostra e esconde divs segundo a lógica pós resposta
        festa.style.display = 'none';
        reinoFogo.style.display = 'flex';
        botaoProximo.style.display = 'none';
        botaoEncaminhaDois.style.display = 'none';
        botaoEncaminhaUm.style.display = 'flex';
    } else if (answer == 2) {
        // mostra e esconde divs segundo a lógica pós resposta
        reinoFogo.style.display = 'none';
        festa.style.display = 'flex';
        botaoProximo.style.display = 'none';
        botaoEncaminhaDois.style.display = 'flex';
        botaoEncaminhaUm.style.display = 'none';
    }
}


//botao de encaminha1
var botaoEncaminhaUm = document.getElementById('encaminhaUm') 
botaoEncaminhaUm.onclick = function () {
    var answer = prompt("O que Rei Gelado deve fazer? \
    \n1 - Tentar apagar o rio de lava \
    \n2 - Ir para casa, pois não quer arranjar problemas diplomáticos");
    
    while (answer != 1 && answer != 2) {
        var answer = prompt("O que Rei Gelado deve fazer? \
        \n1 - Tentar apagar o rio de lava \
        \n2 - Ir para casa, pois não quer arranjar problemas diplomáticos");
    }
     
    // encaminha de acordo com a resposta.
    if (answer == 1) {
        window.location.href = '../final/gameoverRiodeLava.html';
    } else if (answer == 2) {
        window.location.href = '../final/gameover.html';
    }
}


//botao de encaminha2
var botaoEncaminhaDois = document.getElementById('encaminhaDois') 
botaoEncaminhaDois.onclick = function () {
    var answer = prompt("Como lutar contra a Princesa do Fogo? \
    \n1 - Derrubar ela dentro da pscina de bolinhas \
    \n2 - Prende-lá no gelo");
    
    while (answer != 1 && answer != 2) {
        var answer = prompt("Como lutar contra a Princesa do Fogo? \
                        \n1 - Derrubar ela dentro da pscina de bolinhas \
                        \n2 - Prende-lá no gelo");
    }
     
    // encaminha de acordo com a resposta.
    if (answer == 1) {
        window.location.href = '../final/feliz.html';
    } else if (answer == 2) {
        window.location.href = '../final/gameover-moral.html';
    }
}