var Jugador = {
  sprite: 'imagenes/auto_rojo_abajo.png',
  x: 130,
  y: 160,
  ancho: 15,
  alto: 30,
  velocidad: 10,
  vidas: 10,

  mover: function (tecla, movX, movY) {
    switch (tecla) {
      case "izq":
        this.sprite = "imagenes/auto_rojo_izquierda.png";
        this.ancho = 30;
        this.alto = 15;
        this.x += movX;
        break;
      case "der":
        this.sprite = "imagenes/auto_rojo_derecha.png";
        this.ancho = 30;
        this.alto = 15;
        this.x += movX;
        break;
      case "arriba":
        this.sprite = "imagenes/auto_rojo_arriba.png";
        this.ancho = 15;
        this.alto = 30;
        this.y += movY;
        break;
      default:
        this.y += movY;
        this.ancho = 15;
        this.alto = 30;
        this.sprite = "imagenes/auto_rojo_abajo.png";
    }
  },

  perderVidas: function (cantVidas) {
    this.vidas -= cantVidas;
    console.log(`Perdiste ${cantVidas} vidas. Te quedan ${this.vidas} vidas.`);
  },

};