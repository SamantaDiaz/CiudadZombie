/* Un objeto que representa a los obstaculos. Recibe un sprite que tendra la
imagen que lo representa y una potencia indicando cuando danio hace al chocar
al jugador, ademas de los parametros comunes x, y, ancho y alto*/
var Obstaculo = function (sprite, x, y, ancho, alto, potencia) {
  this.sprite = sprite;
  this.x = x;
  this.y = y;
  this.ancho = ancho;
  this.alto = alto;
  this.potencia = potencia;

  // Método para que al chocar con un obstaculo el jugador pierda vidas

  this.quitarVidas= function () {
    Jugador.vidas -= this.potencia; 
    this.potencia = 0;
    console.log(`Cochaste con un obstáculo. Te quedan ${Jugador.vidas} vidas. La potencia del obstáculo es de ${this.potencia}`);
  }
}
