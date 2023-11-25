const contadorVisitas = document.getElementById("contadorVisitas");
const btnReestablecer = document.getElementById("btnReestablecer");
let contador = localStorage.getItem("visitas") || 0;
contador++
localStorage.setItem("visitas", contador)
contadorVisitas.innerHTML = contador
btnReestablecer.addEventListener("click", () => {
    localStorage.clear()
    contadorVisitas.innerHTML = 0
})