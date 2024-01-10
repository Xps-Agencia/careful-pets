
function clickMenu() {
    if (menus.style.display == 'block') {
        menus.style.display = 'none'
    } else {
        menus.style.display = 'block'
    }
}

var elementosDuvida = document.querySelectorAll('.duvida')

elementosDuvida.forEach(function (duvida) {
    duvida.addEventListener('click', function () {
        duvida.classList.toggle('ativa')
    }) 
})