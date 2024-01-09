let menu = document.querySelector('.menu');
let abrirMenu = document.getElementById('abrir_menu');
let cerrarMenu = document.getElementById('cerrar_menu');

abrirMenu.addEventListener('click', mostrarMenu);
cerrarMenu.addEventListener('click', ocultarMenu);

function mostrarMenu() {
    menu.classList.add('mostrar_menu');

    if(menu.classList.contains('mostrar_menu')){
        abrirMenu.style.display = 'none';
        cerrarMenu.style.display = 'block';
    }
}

function ocultarMenu() {
    menu.classList.remove('mostrar_menu')

    if(!menu.classList.contains('mostrar_menu')){
        cerrarMenu.style.display = 'none';
        abrirMenu.style.display = 'block';
    }
}



