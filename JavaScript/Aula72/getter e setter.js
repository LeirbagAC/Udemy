// Basicamente ensinando comom usar get e set em uma função construtora
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true, 
        configurable: 0,

        get: function() {
            return estoquePrivado;
        },
        
        set: function(valor) {
            if (typeof valor !== 'number') {
                console.log('Valor Errado');
                return;
            }
            estoquePrivado = valor;
        }
    });

}
const p1 = new Produto('Calça', 20, 3);
console.log(p1);
p1.estoque = 'O valor que eu quero';
console.log(p1.estoque);

// function criaProduto(nome) {
//     return{
//         get nome(){
//             return nome;
//         },

//         set nome(valor) {
//             valor = valor.replace('Coisa', '')
//             nome = valor
//         }
//     };
// }
// p1 = criaProduto('Camisa');
// console.log(p1.nome);

// p1.nome = 'Qualquer Coisa'
// console.log(p1.nome);
