var area = window.document.querySelector('div#di') // var global
area.addEventListener('click',clicar) // evento para não poluir o html
area.addEventListener('mouseout',sair)

function clicar(){ //função que vai fazer um evento
    area.style.background = 'green' //evento que vai alterar a cor de fundo
}
function sair() {
    area.style.background = 'beige'
}
