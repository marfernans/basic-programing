var d = document.getElementById("dibujos");
var lienzo = d.getContext("2d");
var lineas = 30;
var l = 0;
var yi, xf;
var colory = "#ffa700";


// while (l < lineas) {
//   yi = 10 * l;
//   xf = 10 * (l + 1);

//   dibujarLineas(colorx, 0, yi, xf, 300);

//   console.log("lineas " + l);

//   l = l + 1;
// }


for (l = 0; l < lineas; l++) {
  yi = 10 * l;
  xf = 10 * (l + 1);

  dibujarLineas(colory, 0, yi, xf, 300);
  dibujarLineas(colory, 300, yi, xf, 0);

  console.log("lineas " + l);
}

dibujarLineas(colory, 1, 1, 1, 300);
dibujarLineas(colory, 1, 299, 299, 299);

function dibujarLineas(color, xinicial, yinicial, xfinal, yfinal) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;

  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);

  lienzo.stroke();
  lienzo.closePath();
}
