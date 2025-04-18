function Animal(nome, tipo) {
    this.nome = nome;
    this.tipo = tipo;
}
Animal.prototype.falar = function(som) {
    return this.nome + ', estar falado ' + som 
}

const a1 = new Animal('Gato', 'Felino');

console.log(a1.falar('Miau')); 
