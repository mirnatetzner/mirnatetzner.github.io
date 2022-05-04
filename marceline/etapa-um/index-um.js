// faz aparecer a caixa referente à resposta 1
var primeiraCaixa = document.getElementById('caixa-da-etapa-1');
primeiraCaixa.style.display = 'flex';

var jujuba = document.getElementById('caixa-da-etapa-1-1');
var reiGelado = document.getElementById('caixa-da-etapa-1-2');

//botao de restart
var botaoRestart = document.getElementById('reinicia-jogo') 
botaoRestart.onclick = function () {
    window.location.href = '../../index.html';   
}

var botaoProximo = document.getElementById('proxima-etapa');
botaoProximo.onclick = function () {
    var answer = prompt("Qual dos dois grandes amores de sua vida Marceline irá salvar? \
                        \n1 - Princesa Jujuba, seu grande afeto e crush eterno \
                        \n2 - Rei gelado, que em sua infância supriu o papel afetivo da paternidade");

    while (answer != 1 && answer != 2) {
        var answer = prompt("Qual dos dois grandes amores de sua vida Marceline irá salvar? \
                        \n1 - Princesa Jujuba, seu grande afeto e crush eterno \
                        \n2 - Rei gelado, que em sua infância supriu o papel afetivo da paternidade");
    }

    // esconde a div que está sendo mostrada atualmente
    primeiraCaixa.style.display = 'none';
    // faz aparecer cada bloco de acordo com a resposta.
    if (answer == 1) {
        // mostra e esconde divs segundo a lógica pós resposta
        reiGelado.style.display = 'none';
        jujuba.style.display = 'flex';
        botaoProximo.style.display = 'none';
        botaoRestart.style.display = 'flex';
    } else if (answer == 2) {
        // mostra e esconde divs segundo a lógica pós resposta
        jujuba.style.display = 'none';
        reiGelado.style.display = 'flex';
        botaoProximo.style.display = 'none';
        botaoRestart.style.display = 'flex';
    }
}



