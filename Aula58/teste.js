function Dog(nome, raça) {
    this.nome = nome;
    this.raça = raça;

    this.info = function () {
        console.log(`O nome dele é ${this.nome} e é um ${this.raça}`);
    }
}

const dog1 = new Dog('Rex', 'pitbul');
dog1.info();