var Cola = require('./Cola.js');

const cola = new Cola();

function recibeMensaje(mensaje) {
    console.log("Recibido: ");
    console.log(mensaje);
    //inicio();
}

function inicio() {
    cola.pop(recibeMensaje);
}

inicio();
