var texto = document.getElementById("texto__lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click" , dibujoPorClick);

var d = document.getElementById("dibujos");
var ancho = d.width;
var lienzo = d.getContext("2d");

function dibujarLineas(color, xinicial, yinicial, xfinal, yfinal) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;

  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}
function dibujoPorClick() {
  var lineas = parseInt(texto.value);
  var l = 0;
  var yi, xf;
  var colory = "#ffa700";

  var espacio = ancho / lineas;
 

  for (l = 0; l < lineas; l++) {
    yi = espacio * l;
    xf = espacio * (l + 1);
    dibujarLineas(colory, 0, yi, xf, 300);
    console.log("lineas " + l);
  }

  dibujarLineas(colory, 1, 1, 1, 299);
  dibujarLineas(colory, 1, 299, 299, 299);

  
}
