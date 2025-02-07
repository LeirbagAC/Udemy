class Animal {
    fazerSom() {
        console.log("Algum som...");
    }
}

class Cachorro extends Animal {
    fazerSom() {
        console.log("Au Au!");
    }
}

class Gato extends Animal {
    fazerSom() {
        console.log("Miau!");
    }
}

let meuAnimal = new Animal();
let meuCachorro = new Cachorro();
let meuGato = new Gato();

meuAnimal.fazerSom(); // Algum som...
meuCachorro.fazerSom(); // Au Au!
meuGato.fazerSom(); // Miau!