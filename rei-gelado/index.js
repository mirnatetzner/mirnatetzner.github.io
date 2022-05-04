var inicio = document.getElementById('caixa-da-etapa-inicio'); 
inicio.style.display="flex";

var botaoProximo = document.getElementById('proxima-etapa'); 
botaoProximo.onclick = function () {
    // pergunta pela primeira vez.
    var answer = prompt("O que Rei Gelado deve fazer? \
     \n1 - Investigar a causa do incêndio para solucioná-lo e a festa poder voltar a rolar \
     \n2 - Ir para casa onde pode brincar de esquibunda a vontade com Gunter e seus bonecos de neve");
    // enquanto a pessoa não repsonde com 1 ou 2, continua perguntando.
    while (answer!=1 && answer!=2){
        var answer = prompt("O que Rei Gelado deve fazer? \
        \n1 - Investigar a causa do incêndio para solucioná-lo e a festa poder voltar a rolar \
        \n2 - Ir para casa onde pode brincar de esquibunda a vontade com Gunter e seus bonecos de neve");
    } 
    // vai para cada arquivo depois que a pessoa respondeu corretamente.
    if (answer == 1) {
        window.location.href = '../rei-gelado/etapa-um/index-um.html';
    } else if (answer == 2) {
        window.location.href = '../rei-gelado/final/gameover.html';
    }
}



