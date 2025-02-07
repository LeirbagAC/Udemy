class Produto{
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }

    aumento(quantia) {
        this.preco += quantia;
    }

    desconto(quantia) {
        this.preco -= quantia;
    }
}
class Camiseta extends Produto{
    constructor(nome, preco, cor) {
        super(nome, preco);
        this.cor = cor;
    }

    aumento(percentual) {
        this.preco = this.preco + (this.preco * (percentual / 100));
    }
}

const camisa = new Camiseta('Regata', 8.5, 'verde');
// camisa.aumento(100);
// console.log(camisa);

class Caneca extends Produto{
    constructor(nome, preco, material, estoque) {
        super(nome, preco);
        this.material = material;

        Object.defineProperty(this, 'estoque', {
            enumerable: true,
            configurable: false,
            get: function() {
                return estoque;
            },
            set: function(valor) {
                if (typeof valor !==  'number') return;
                estoque = valor
            }
        });
    }

    aumento(percentual) {
        this.preco = this.preco + (this.preco * (percentual / 100))
    }
}
const caneca = new Caneca('Caneca de chá', 8.3, 'Porcelana', 5);
caneca.aumento(100)
console.log(caneca);

