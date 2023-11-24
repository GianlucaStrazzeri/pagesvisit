localStorage.clear();

//1. Capturado los ids de html contadorVisitas utilizando 
let contadorVisitas= document.getElementById("contadorVisitas");

//2. Capturar btnReestablecer como id del button
let btnReestablecer= document.getElementById("btnReestablecer");

//3. Capturar numero de visitas utilizando localStoragesetItem(`contadorVisitas`; `valor`);
localStorage.setItem(`numeroVisitas`, `0`);

console.log(localStorage);


//4. sustituir el contadorvisita capturado con innerHtml
//contadorVisitas = `El numero de visitas es de ${storagedViews}`;

//console.log(contadorVisitas);

//5.Añadir un addEventlistener para poner a 0 las visitas de la pagina  
btnReestablecer.addEventListener('click', function () {
    contadorVisitas.innerHTML = '0'});