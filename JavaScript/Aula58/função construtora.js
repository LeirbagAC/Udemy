function Pessoa(nome, sobrenome) {
    this.nome = nome; 
    this.sobrenome = sobrenome;  

    this.falar = () => {
        console.log(`Meu nome é ${this.nome} ${this.sobrenome}`);   
    };
}

const pessoa1 = new Pessoa('Gabriel', 'Albuquerque');
const pessoa2 = new Pessoa('Ricardo', 'Lucas');
pessoa1.fala = function() {console.log('oi')};
pessoa1.fala();
console.log(pessoa1.nome, pessoa2.sobrenome); 
pessoa1.falar(); 
