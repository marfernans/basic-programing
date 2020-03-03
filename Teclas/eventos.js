var teclas = {
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40
};

console.log(teclas);

document.addEventListener("keydown", dibujarTeclado);
var cuadro = document.getElementById("area_de_dibujo");

var papel = cuadro.getContext("2d");
var x = 100;
var y = 100;

dibujarLineas("red", x-1, x-1, x+1, x+1, papel);

function dibujarLineas(color, xinicial, yinicial, xfinal, yfinal, lienzo) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;

  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujarTeclado(evento) {
  var colorx = "#ffa700";
  var movimiento = 1;

  switch (evento.keyCode) {
    case teclas.LEFT:
      dibujarLineas(colorx, x, y, x - movimiento, y, papel);
      x = x - movimiento;
      console.log(" VAMO PA' LA IZQUIERDA!");
      break;

    case teclas.UP:
      dibujarLineas(colorx, x, y, x, y - movimiento, papel);
      y = y - movimiento;
      console.log("VAMO PA' ARRIBA!");
      break;

    case teclas.RIGHT:
      dibujarLineas(colorx, x, y, x + movimiento, y, papel);
      x = x + movimiento;
      console.log("VAMOS PA' LA DERECHA!");
      break;

    case teclas.DOWN:
      dibujarLineas(colorx, x, y, x, y + movimiento, papel);
      y = y + movimiento;
      console.log("VAMO PA' BAJO!");
      break;

    default:
      break;
  }
}
