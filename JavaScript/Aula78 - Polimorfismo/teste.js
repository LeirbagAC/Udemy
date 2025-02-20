class Animal {
    constructor(nome) {
        this.nome = nome;
    }
    
    fazerSom() {
        console.log("Algum som...");
    }
}

class Cachorro extends Animal {
    constructor(nome, raça) {
        super(nome);
        this.raça = raça;
    }

    fazerSom() {
        console.log(`${this.nome} faz: Au Au!`);
    }
}

class Gato extends Animal {
    constructor(nome, cor) {
        super(nome);
        this.cor = cor;

    }

    fazerSom() {
        console.log(`${this.nome} faz: Miau!`);
    }
}

// let meuAnimal = new Animal();
// let meuCachorro = new Cachorro('Rex', 'Vira-lata');
// let meuGato = new Gato('Tipoco', 'Rajado');

// meuAnimal.fazerSom(); // Algum som...
// meuCachorro.fazerSom(); // Au Au!
// meuGato.fazerSom(); // Miau!

const animais = [
    new Cachorro('Rex', 'Vira-lata'),
    new Gato('Tipoco', 'Rajado'),
    new Animal()

]

animais.forEach(animal => animal.fazerSom());