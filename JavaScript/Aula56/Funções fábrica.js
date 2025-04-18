function criarPessoa(nome, sobrenome, altura, peso) {
    return {
        nome, 
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },

        //SETTER
        set nomeCompleto (valor /*Esse valor é o p1.nomeCompleto*/) {
            // valor = valor.split(' ');
            // this.nome = valor.shift();
            // this.sobrenome = valor.join(' ');
            console.log(valor);
        },

        fala(assunto = 'falando sobre NADA') { //forma reduzida de se criar uma função nessa cenário
            return `${this.nome} está ${assunto}`;
        },

        altura,
        peso,

        //GETTER
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criarPessoa('Gabriel', 'Albuquerque Cabral', 1.63, 68);
p1.nomeCompleto = 'Maria Luíza Carvalho';
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.nomeCompleto);
console.log(p1.fala('falando sobre academia'));
console.log(p1.imc);