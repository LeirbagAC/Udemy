//Produto -> aumento desconto
//Camiseta = Cor, 
function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
};
Produto.prototype.aumento = function (quantia) {
    this.preco += quantia
};
Produto.prototype.desconto = function (quantia) {
    this.preco -= quantia
};

function Camiseta(nome, preco, cor) { 
    Produto.call(this, nome, preco);
    this.cor = cor;
};
Camiseta.prototype = Object.create(Produto.prototype); //Para 'setar' o prototype de Camiseta para o mesmo que o que de Produto
Camiseta.prototype.constructor = Camiseta //Mas irá arranjar um problema que é resolvido por essa linha

Camiseta.prototype.aumento = function (percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
};

const camisa = new Camiseta('Regata', 8.5, 'verde');
// camisa.aumento(100);
// console.log(camisa);

function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco);
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
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca

const produto = new Produto('Gen', 111); 
const camiseta = new Camiseta('Regata', 7.5, 'Preta');
const caneca = new Caneca('Caneca de chá', 8.3, 'Porcelana', 5);
// console.log(produto);
// console.log(camiseta);

caneca.estoque = '100';
console.log(caneca.estoque);