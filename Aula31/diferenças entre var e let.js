// {
//     let teste = 'Dentro da função'; 
//     // console.log(teste);
// }
// let teste = 2;
// console.log(teste);
// var nome1 = 'Gabriel';
// let nome2 = 'Albuquerque';

// var nome1 = 5
// console.log(nome1, nome2);

// function testVar() {
//     if (true) {
//         var x = 5;
//     }
//     console.log(x); // 5, `x` é acessível fora do bloco if
// }

// function testLet() {
//     if (true) {
//         let y = 5;
//     }
//     console.log(y); // ReferenceError: y is not defined, `y` não é acessível fora do bloco if
// }

// testVar();
// testLet();

for (var i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(i); // Vai imprimir 3, 3, 3
    }, 1000);
}

for (let j = 0; j < 3; j++) {
    setTimeout(function() {
        console.log(j); // Vai imprimir 0, 1, 2
    }, 1000);
}