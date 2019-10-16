

var ZombieConductor = function (sprite, x, y, ancho, alto, velocidad, rangoMov, direccion) {
  Enemigo.call(this, sprite, x, y, ancho, alto, velocidad, rangoMov);
  this.direccion = direccion;
}

ZombieConductor.prototype = Object.create(Enemigo.prototype);
ZombieConductor.prototype.constructor = ZombieConductor;

ZombieConductor.prototype.mover = function () {
  if (this.direccion === "v") { // Si la direccion es vertical ,se modifica la Y sumandole la valocidad, a su vez si llega a alguno de sus límites multiplica la velocidad por -1.
    this.y += this.velocidad;
    if ((this.y < this.rangoMov.desdeY) || (this.y > this.rangoMov.hastaY)) {
      this.velocidad *= -1;
    };
  } else { // Si la direccion es horizontal ,se modifica la X sumandole la valocidad, a su vez si llega a alguno de sus límites multiplica la velocidad por -1.
    this.x += this.velocidad;
    if ((this.x < this.rangoMov.desdeX) || (this.x > this.rangoMov.hastaX)) {
      this.velocidad *= -1;
    };
  };
};

ZombieConductor.prototype.atacar = function (jugador) {
  jugador.vidas = 0;
};