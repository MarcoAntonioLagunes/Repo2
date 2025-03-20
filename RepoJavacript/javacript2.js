var contenedor=document.getElementByid("contenido");
contenedor.innerText="Este mensaje viene de Javacript";

function mostrarMensaje(){
    alert("Hola, Javacript es divertido");
}

function leerValor(){
    const input=document.getElementById('unInput');
    const valor=input.value;
    alert("El valor es "+ valor);
}