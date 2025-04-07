const Queue = require('file-queue').Queue

class Cola {
    #queue = null;
    #stop = false;
    #busy = false;

    constructor() {
        this.#queue = new Queue(".", (error) => {
            this.#busy = false;
            if (error) this.#stop = true;
        });
    }

    push(objeto) {
        this.#busy = true;
        this.#queue.push(objeto, (error) => {
            this.#busy = false;
            if (error) this.#stop = true;
        });
    }

    async pop(endProcess) {
        this.#busy = true;
        this.#queue.tpop((error, message, commit) => {
            if (error) {
                this.#stop = true;
                return null;
            }
            commit( (error) => {
                if (error) {
                    this.#stop = true;
                    return null;
                } else {
                    endProcess(message);
                    this.#busy = false; 
                    return message;
                }

            });
        });
    }

}

module.exports = Cola;