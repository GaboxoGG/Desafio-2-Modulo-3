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
  document.getElementById("Cantidad1").innerHTML += `<option value="${i}">${i}</option>`;
  document.getElementById("Cantidad2").innerHTML += `<option value="${i}">${i}</option>`;
  document.getElementById("Cantidad3").innerHTML += `<option value="${i}">${i}</option>`;
}

function verificar() {
  const N1 = document.getElementById("Cantidad1").value;
  const N2 = document.getElementById("Cantidad2").value;
  const N3 = document.getElementById("Cantidad3").value;

  const password = N1 + N2 + N3;
  const resultado = document.getElementById("Resultado");

  if (password === "911") {
    resultado.textContent = "Password 1 correcto";
    
  } else if (password === "714") {
    resultado.textContent = "Password 2 es correcto";
    
  } else {
    resultado.textContent = "Password incorrecto";
    
  }
}