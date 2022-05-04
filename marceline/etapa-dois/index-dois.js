// faz aparecer a caixa referente à resposta 1
var primeiraCaixa = document.getElementById('caixa-da-etapa-2');
primeiraCaixa.style.display = 'flex';

var todosBemBeijo = document.getElementById('caixa-da-etapa-2-1');
var reiGelado = document.getElementById('caixa-da-etapa-2-2');

// definição dos botoes
var botaoIntensidade = document.getElementById('quantidade-chuva');
var botaoProximo = document.getElementById('proxima-etapa');
//botao de restart
var botaoRestart = document.getElementById('reinicia-jogo') 
botaoRestart.onclick = function () {
    window.location.href = '../../index.html';   
}


botaoProximo.onclick = function () {
    var answer = prompt("Qual será a solução mais rápida e eficaz? \
                        \n1 - Usar o som de sua guitarra para apagar o fogo \
                        \n2 - Convencer o Rei Gelado a criar uma chuva que irá apagar as chamas");

    while (answer != 1 && answer != 2) {
        var answer = prompt("Qual será a solução mais rápida e eficaz? \
                        \n1 - Usar o som de sua guitarra para apagar o fogo \
                        \n2 - Convencer o Rei Gelado a criar uma chuva que irá apagar as chamas");
    }

    // esconde a div que está sendo mostrada atualmente
    primeiraCaixa.style.display = 'none';
    // faz aparecer cada bloco de acordo com a resposta.
    if (answer == 1) {
        // mostra e esconde divs segundo a lógica pós resposta
        reiGelado.style.display = 'none';
        todosBemBeijo.style.display = 'flex';
        botaoProximo.style.display = 'none';
        botaoRestart.style.display = 'flex';
    } else if (answer == 2) {
        // mostra e esconde divs segundo a lógica pós resposta
        todosBemBeijo.style.display = 'none';
        reiGelado.style.display = 'flex';
        botaoProximo.style.display = 'none';
        botaoIntensidade.style.display = 'flex';
    }
}


botaoIntensidade.onclick = function () {
    // oergunta a primeira vez. um NÚMERO deve ser dado como resposta
    var answer = prompt("Qual será a intensidade da chuva? \
                        Use numerais de 1 a 10.");

    // tenta transformar em número. Se não é número, a função retorna NaN
    var answerToNumber = Number(answer)
    // checando se é NaN (Not a Number)
    while (answerToNumber == NaN) {
        var answer = prompt("Qual será a intensidade da chuva? \
                        Use numerais de 1 a 10.");
        var answerToNumber = Number(answer)
    }
    
    if (answerToNumber <= 5) {
        window.location.href = '../final/final-chuva.html';
    }
    else if (answerToNumber > 5){
        window.location.href = '../final/final-hospital.html';
    }
}


