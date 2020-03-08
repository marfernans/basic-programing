var jfive = require("johnny-five");
var circuito = new jfive.Board();

circuito.on("ready", prende);

function prende() {
  var ledrojo = new jfive.Led(9);
  var ledazul = new jfive.Led(13);
  ledrojo.blink(100);
  ledazul.blink(300);

  console.log("HOLA SE HACER HARDWARE! :)");
}
