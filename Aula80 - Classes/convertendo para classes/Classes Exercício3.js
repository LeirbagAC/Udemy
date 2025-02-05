class ValidaCPF{
    constructor(cpfLimpo) {
        Object.defineProperty(this,'cpfLimpo', {
            enumerable: true,
            get: function() {
                return cpfLimpo.replace(/\D+/g, '');
            }
        });
    }

    valida() {
        if(typeof this.cpfLimpo === 'undefined') return false;
        if(this.cpfLimpo.length !== 11) return false;
        if(this.isSequencia()) return false;

        const cpfParcial = this.cpfLimpo.slice(0, -2);
        const digitoUm = this.criarDigito(cpfParcial);
        const digitoDois = this.criarDigito(cpfParcial + digitoUm);

        const novoCpf = cpfParcial + digitoUm + digitoDois;
        return novoCpf === this.cpfLimpo
    }

    criarDigito(cpfParcial) {
        const cpfArray = Array.from(cpfParcial);
        let regressivo = cpfArray.length + 1
        let total = cpfArray.reduce((ac, val) => {
            ac += (regressivo *  Number(val));
            regressivo--;
            return ac;
        }, 0);
        
        const digito = 11 - (total % 11);
        return (digito > 9) ? 0: digito;
    }

    isSequencia() {
        let primeiroChar = this.cpfLimpo[0]
        let tudoIgual = true;
        for(let i = 1; i < this.cpfLimpo.length; i++) {
            if(primeiroChar !== this.cpfLimpo[i]) {
                tudoIgual = false;
                break;
            }
        }
        if(tudoIgual) {
            console.log('todos os dígitos iguais, inválido por definição');
            return false;
        }
    }
}

const cpf = new ValidaCPF('637.573.650-11');
// const cpf = new ValidaCPF('111.111.111-11');
console.log(cpf.valida());