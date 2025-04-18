function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    // this.nomeCompleto = () => 'ORIGINAL ' + this.nome + ' ' + this.sobrenome;
}

Pessoa.prototype.estouAqui = 'hahahaha';
Pessoa.prototype.nomeCompleto = function (){
    return this.nome + ' ' + this.sobrenome;
} 

const pessoa1 = new Pessoa('Gabriel', 'A')
const pessoa2 = new Pessoa('Rafael', 'O') 
const data = new Date

console.dir(pessoa1);
console.dir(data);



