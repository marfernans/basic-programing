var express = require("express");
var app = express();

app.get("/", inicio);

app.get("/marius", marius);

function inicio(peticion, resultado) {
  resultado.send(
    " <h1>HOLA, EL SERVIDOR FUNCIONA 👩‍🚀 🚀!</h1>"
  );
}
function marius(peticion, resultado) {
  resultado.send(" <h1>Marca Personal MARIUStheBrand 👩‍🚀</h1>");
}

app.listen(8989);
