// function funcao () {
//     // console.log(arguments);
//     console.log(arguments[10]);
// }
// funcao('Valor', 1,2,3,4,5,6,7,8,9, 'Gabriel');

// Funciona dessa forma também
// const funcao2 = function () {
//     total = 0;
//     for (let i of arguments) {
//         total += i;
//     }

//     console.log(total);
// };
// funcao2(1,2,3,4,5,6,7);

// function conta (operador, acumulador, ...numeros) {
//     for(let numero of numeros) {
//        if(operador === '+') acumulador += numero; 
//        if(operador === '-') acumulador -= numero; 
//        if(operador === '*') acumulador *= numero; 
//        if(operador === '/') acumulador /= numero; 
//     }

//     console.log(acumulador);
// }
// conta('*', 100, 1,2,3,4,5,6,7);
// // ou pode ser feita assim

// const conta = (operador, acumulador, ...numeros) => {
//     for(let numero of numeros) {
//        if(operador === '+') acumulador += numero; 
//        if(operador === '-') acumulador -= numero; 
//        if(operador === '*') acumulador *= numero; 
//        if(operador === '/') acumulador /= numero; 
//     }

//     console.log(acumulador);
// };
// conta('+', 0, 1,2,3,4,5,6,7);

//                  NÃO FUNCIONA EM ARROW FUNCTIONS
const teste= () => {
    console.log(arguments[5]);
}
teste(1,2,3,4,5,6,7,8,9,10);