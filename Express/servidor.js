var express = require("express");
var app = express();

app.get("/", inicio);

app.get("/marius", marius);

function inicio(peticion, resultado) {
  resultado.send("ESTE ES MI <strong> HOME EXQUISITO Y HASTA MÁSSSS! </strong>");
}
function marius(peticion, resultado) {
  resultado.send("Marca personal <strong> MARIUStheBrand </strong>");
}


app.listen(8989);
