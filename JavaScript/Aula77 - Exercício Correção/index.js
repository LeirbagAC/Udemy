function ValidaCPF(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true, 
    get: function() {
        return cpfEnviado.replace(/\D+/g, '');
    }
    });
}

ValidaCPF.prototype.valida = function () {
    if(typeof this.cpfLimpo === 'undefined') return false;
    if(this.cpfLimpo.length !== 11) return false
    if(this.isSequencia()) return false;

    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const digitoUm = this.criarDigito(cpfParcial);
    const digitoDois = this.criarDigito(cpfParcial + digitoUm);

    const novoCpf = cpfParcial + digitoUm + digitoDois; 
    // console.log(cpfParcial + digitoUm + digitoDois);

    return this.cpfLimpo === novoCpf;
};

ValidaCPF.prototype.criarDigito = function(cpfParcial) {
    const cpfArray = Array.from(cpfParcial);
    let regressivo = cpfArray.length + 1
    let total = cpfArray.reduce((ac, val) => {
        // console.log(regressivo, val, (val * regressivo));
        ac += (regressivo *  Number(val));
        regressivo--;
        return ac;
    }, 0);

    const digito = 11 - (total % 11);
    return (digito > 9) ? 0: digito;
};

ValidaCPF.prototype.isSequencia = function() {
    // const primeiroChar = this.cpfLimpo[0];
    // let todosIguais = true; // Assume que todos são iguais inicialmente
    // for(let i = 1; i < this.cpfLimpo.length; i++) {
    //     if(this.cpfLimpo[i] !== primeiroChar) {
    //         todosIguais = false; // Se algum caractere não for igual, marca como falso
    //         break; // Interrompe o loop, pois já sabemos que não são todos iguais
    //     }
    // }
    // if(todosIguais) {
    //     console.log('todos os dígitos iguais, inválido por definição'); 
    //     return false; // Retorna falso para indicar CPF inválido
    // }  
    //                  MANEIRA MAIS FÁCIL ABAIXO
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return sequencia === this.cpfLimpo;
};

const cpf = new ValidaCPF('059.394.473-93');
console.log(cpf.valida());

// if(cpf.valida()) {
//     console.log('CPF válido');
// } else {
//     console.log('CPF inválido');
// }