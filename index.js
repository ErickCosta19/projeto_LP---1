var left = window.document.getElementById('left')
var leo = window.document.getElementById('leo')
var sam = window.document.getElementById('sam')
var bruh = window.document.getElementById('bruh')
var right = window.document.getElementById('right')

function RolarParaDireita() {
    leo.style = 'display:none'
    bruh.style = 'display:flex'
    left.style = 'display:flex; margin-top: 60px; cursor: pointer'
    right.style = 'display:none'
};

function RolarParaEsquerda() {
    leo.style = 'display:flex'
    bruh.style = 'display:none'
    left.style = 'display:none'
    right.style = 'display:flex'
}
