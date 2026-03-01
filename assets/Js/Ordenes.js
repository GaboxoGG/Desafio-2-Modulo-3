//Parte 1
const imagen =document.getElementById('Yeah');
const boton = document.getElementById('superboton');

function alternarBorde() {
    imagen.classList.toggle('con-borde');
}

boton.addEventListener('click', alternarBorde)

imagen.addEventListener('click', alternarBorde);

//Parte 2


//Parte 3
for (let i = 1; i <= 9; i++) {
    document.getElementById("Cantidad1").innerHTML += `<option value="${i}">${i}</option>`
    document.getElementById("Cantidad2").innerHTML += `<option value="${i}">${i}</option>`
    document.getElementById("Cantidad3").innerHTML += `<option value="${i}">${i}</option>`
}

function verificar() {
    const N1 = document.getElementById("Cantidad1").Value;
    const N2 = document.getElementById("Cantidad2").Value;
    const N3 = document.getElementById("Cantidad3").Value;

    const Contraseña = N1 + N2 + N3;
    const Resultado = document.getElementById("Resultado");

    if (Contraseña === "911") {
        Resultado.textContent = "Contraseña 1 Correcta";
    } else if (Contraseña === "714") {
        Resultado.textContent = "Contraseña 2 Correcta";
    } else {
        Resultado.textContent = "Contraseña Incorrecta"
    }
}