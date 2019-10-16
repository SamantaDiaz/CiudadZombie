var body = document.getElementById("contenedor");
contenedor.addEventListener("click", cambioPantalla);
var mensaje = false;

function cambioPantalla() {
    if(!mensaje) {
        document.getElementById("mensaje-1").className = "oculto";
        document.getElementById("mensaje-2").className = "visible";
        mensaje = true;
    } else if(mensaje) {
        window.location.href = "juego.html";
    }
};