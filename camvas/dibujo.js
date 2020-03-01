var d = document.getElementById("dibujos");
var lienzo = d.getContext("2d");

dibujarLineas("#ff2b95", 150, 150, 300, 300)
dibujarLineas("#1a1a1a", 50, 150, 150, 220)

function dibujarLineas(color, xinicial, yinicial, xfinal, yfinal) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;

  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, xfinal);

  lienzo.stroke();
  lienzo.closePath();
}
