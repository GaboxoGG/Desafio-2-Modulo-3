//Parte 1
const imagen =document.getElementById('Yeah');
const boton = document.getElementById('superboton');

function alternarBorde() {
    imagen.classList.toggle('con-borde');
}

boton.addEventListener('click', alternarBorde)

imagen.addEventListener('click', alternarBorde);

//Parte 2