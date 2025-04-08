const {spawn} = require('child_process')
const { Lanzador } = require('./Lanzador');

let lanzador = null;

function nuevoDato(dato) {
	console.log("Ha llegado el dato: "+dato);
}

function errorDato(dato) {
	console.log("Ha terminado con el error "+dato);
}

function finalDato() {
	console.log("Termino");
}

function inicio() {
	//lanzador = new Lanzador("sudo python3 /home/usuario/lora/SX126X_LoRa_HAT_Code/raspberrypi/python/main.py",
	//	nuevoDato, errorDato, finalDato, true);
	lanzador = new Lanzador("sudo python3 p1.py",
                nuevoDato, errorDato, finalDato, true);
}
