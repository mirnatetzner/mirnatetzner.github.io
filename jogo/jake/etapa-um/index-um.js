// faz aparecer a caixa referente à resposta 1
var primeiraCaixa = document.getElementById('caixa-da-etapa-1');
primeiraCaixa.style.display = 'flex';

var sozinho = document.getElementById('caixa-da-etapa-1-1');


//botao de restart
var botaoRestart = document.getElementById('reinicia-jogo') 
botaoRestart.onclick = function () {
    window.location.href = '../../index.html';   
}

var botaoProximo = document.getElementById('proxima-etapa');
botaoProximo.onclick = function () {
    var answer = prompt("O que Jake faz?    \
                        \n1 - Tenta abrir a porta para sair \
                        \n2 - Enrola a princesa dentro de si para que ela não respire mais a fumaça");
                        
    while (answer != 1 && answer != 2) {
        var answer = prompt("O que Jake faz?  \
        \n1 - Tenta abrir a porta para sair \
        \n2 - Enrola a princesa dentro de si para que ela não respire mais a fumaça");
    }

    // esconde a div que está sendo mostrada atualmente
    primeiraCaixa.style.display = 'none';
    // faz aparecer cada bloco de acordo com a resposta.
    if (answer == 1) {
        // mostra e esconde divs segundo a lógica pós resposta
        sozinho.style.display = 'flex';
        botaoProximo.style.display = 'none';
        botaoRestart.style.display = 'flex';
    } else if (answer == 2) {
        // mostra e esconde divs segundo a lógica pós resposta
        window.location.href = '../etapa-dois/index-dois.html'
    }
}



