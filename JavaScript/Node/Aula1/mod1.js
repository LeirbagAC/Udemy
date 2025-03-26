// const nome = 'Gabriel'; 
// const sobrenome = 'Albuquerque'; 

// const falaNome = () => {
//     return nome + ' ' + sobrenome;
// };

// // module.exports.nome = nome;
// // module.exports.sobrenome = sobrenome;
// // module.exports.falaNome = falaNome;

// //Assim também funciona e é mais prático
// exports.NOME = nome; //Pode mudar o nome de como vai ser exportada
// exports.sobrenome = sobrenome;
// exports.falaNome = falaNome;

// //Também pode ser assim, apesar de não muito utilizado
// this.qualquerCoisa = 'sgniwgfbhasfgsyo'

// console.log(module.exports);

class Pessoa {
    constructor(nome){
        this.nome = nome;
    };
}
exports.Pessoa = Pessoa;