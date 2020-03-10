var j5 = require("johnny-five");
var circuito = new j5.Board();
var bonbi, motor, celda;
var turno = 0;

circuito.on("ready", prende);

function prende() {
  var configuracion = {
    pin: "A0",
    freq: 50
  };
  celda = new j5.Sensor(configuracion);

  bonbi = new j5.Led(13);
  bonbi.on();

  motor = j5.Servo(9);

  motor.to(90);
  ondear();
}

function ondear() {
  console.log("Luz: " + celda.value);

  var luz = celda.value;
  if (luz > 40) {
    if (turno == 1) {
      turno = 0;
      motor.to(70);
    } else {
      turno = 1;
      motor.to(110);
    }
  } else {
    motor.to(150);
  }
  setTimeout(ondear, 1000);
}
