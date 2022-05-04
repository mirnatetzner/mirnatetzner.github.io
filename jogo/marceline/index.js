var inicio = document.getElementById('caixa-da-etapa-inicio'); 
inicio.style.display="flex";

var botaoProximo = document.getElementById('proxima-etapa'); 
botaoProximo.onclick = function () {
    // pergunta pela primeira vez.
    var answer = prompt("Marceline deve? \n1 - Salvar quem importa \n2 - Ajudar a combater");
    // enquanto a pessoa não repsonde com 1 ou 2, continua perguntando.
    while (answer!=1 && answer!=2){
        var answer = prompt("Marceline deve? \n1 - Salvar quem importa \n2 - Ajudar a combater");
    } 
    // vai para cada arquivo depois que a pessoa respondeu corretamente.
    if (answer == 1) {
        window.location.href = '../marceline/etapa-um/index-um.html';
    } else if (answer == 2) {
        window.location.href = '../marceline/etapa-dois/index-dois.html';
    }
}
