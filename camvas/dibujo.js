var d = document.getElementById("dibujos");
var lienzo = d.getContext("2d");


lienzo.beginPath();
lienzo.strokeStyle = "green";

lienzo.moveTo(150, 150);
lienzo.lineTo(300, 300);

lienzo.stroke();
lienzo.closePath();
