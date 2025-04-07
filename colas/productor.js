var Cola = require('./Cola.js');

const cola = new Cola();

let i=0;
setInterval(function() {
    cola.push({ time: i++, msg: 'hello'+i });
}, 1000);