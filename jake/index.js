

var inicio = document.getElementById('caixa-da-etapa-inicio'); 
inicio.style.display="flex";

var botaoProximo = document.getElementById('proxima-etapa'); 
botaoProximo.onclick = function () {
    // pergunta pela primeira vez.
    var answer = prompt("O que Jake faz? \n1 - Vai embora sozinho \n2 - Decide ajudar todos");
    // enquanto a pessoa não repsonde com 1 ou 2, continua perguntando.
    while (answer!=1 && answer!=2){
        var answer = prompt("O que Jake faz? \n1 - Vai embora sozinho \n2 - Decide ajudar todos");
    } 
    // vai para cada arquivo depois que a pessoa respondeu corretamente.
    if (answer == 1) {
        window.location.href = '../jake/final/gameover.html';
    } else if (answer == 2) {
        window.location.href = '../jake/etapa-um/index-um.html';
    }
}



