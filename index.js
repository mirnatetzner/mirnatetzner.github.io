
document.getElementById('play').onclick = function () {
    document.getElementById('menu').style.display = "none"
    document.getElementById('choose').style.display = "flex"
}



var instruction = document.getElementById('instruction');
instruction.onclick = function (){
    window.location.href = './instruction/index.html'
}

var about = document.getElementById('about');
about.onclick = function (){
    window.location.href = './about/index.html'
}

var marceline = document.getElementById('bt-marceline') 
marceline.onclick = function () {
    window.location.href = './marceline/index.html';   
}

var reigelado = document.getElementById('bt-rei-gelado') 
reigelado.onclick = function () {
    window.location.href = './rei-gelado/index.html';   
}

var jake = document.getElementById('bt-jake') 
jake.onclick = function () {
    window.location.href = './jake/index.html';   
}