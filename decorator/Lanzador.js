const {spawn} = require('child_process')

class Lanzador {
	constructor(cadena, callback, callbackError, callbackEnd) {
		this.cadena = cadena.split(" ");
		this.programa = this.cadena[0];
		this.resto = this.cadena.slice(1,this.cadena.length);
		this.process = spawn(this.programa, this.resto);
		this.process.stdout.on('data', (data)=>{
			callback(data);
		});
		this.process.stderr.on('data', (data)=>{
			callbackError(data);
		});
		this.process.on('close', (code) => {
			callbackEnd();
		});
	}
}

module.exports = {
	Lanzador
};
