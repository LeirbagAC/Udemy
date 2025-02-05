// //new Object ->Object.prototype
// const objA = {
//     ChaveA: 'A'
// };

// const objB = {
//     ChaveB: 'B'
// };

// //Outas forma de criar um objeto
// const objC = new Object();
// objC.ChaveC = 'C';

// Object.setPrototypeOf(objB, objA);
// Object.setPrototypeOf(objC, objB);
// console.log(objC);

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
};

// // NÃO USAR ARROW FUNCTION EM PROTOTYPES, POIS IRÁ DAR ERRO
Produto.prototype.aumento = function (percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
};

Produto.prototype.desconto = function (percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100));
};

const p1 = new Produto('Camisa', 50);
p1.aumento(10);
p1.desconto(5);
console.log(p1); 

const p2 = {
    nome: 'Caneca',
    preco: 15
};
Object.setPrototypeOf(p2, Produto.prototype);

p2.aumento(10);
console.log(p2);

// const p3 = Object.create(Produto.prototype, /*Essa parte é opicional*/{
//     preco: {
//         value: 99,
//         enumerable: 1,
//         configurable: 1,
//         writable: 1
//     },
//     tamanho: {
//         value: 42,
//         enumerable: 1,
//         configurable: 1,
//         writable: 1     
//     }
// }  );//Para criar o obj e já 'setar' ele
// p3.aumento(10)
// console.log(p3);

const p4 = Object.create(Produto.prototype, {
    nome: {
        value: 'Boné',
        enumerable: 1
    },
    preco: {
        value: 10,
        enumerable: 1,
        writable: 1
    }
});
p4.aumento(10);
console.log(p4);
console.log(Object.getOwnPropertyDescriptor(p4, 'estoque'));