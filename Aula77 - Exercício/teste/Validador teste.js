const form = document.getElementById('.formulario'); 
console.log(form);

form.addEventListener('submit', e => {
    e.preventDefault();
});

// function primeiroNumero(cpf) {
//     //verifica se o cpf é vazio
//     if(cpf.length === 0) return console.log('cpf vazio');

//     //verifica se todos são iguais
//     const primeiroChar = cpf[0];
//     let todosIguais = true; // Assume que todos são iguais inicialmente

//     for(let i = 1; i < cpf.length; i++) {
//         if(cpf[i] !== primeiroChar) {
//             todosIguais = false; // Se algum caractere não for igual, marca como falso
//             break; // Interrompe o loop, pois já sabemos que não são todos iguais
//         }
//     }
//     if(todosIguais) {
//         console.log('todos os dígitos iguais, inválido por definição');
//         return false; // Retorna falso para indicar CPF inválido
//     }

//     let soma = 0;
//     for(let i = 0; i < (cpf.length - 2); i++) {
//         soma += Number(cpf[i]) * (10 - i);
//     }

//     let resto = 11 - (soma % 11);
//     let digitoVerificador = resto > 9 ? 0: resto;
//     return digitoVerificador;
// }

// function segundoNumero(cpf) {
//     let soma = 0;       
//     for(let i = 0; i < (cpf.length - 1); i++) {
//         soma += Number(cpf[i]) * (11 - i);
//     }
//     let resto = 11 - (soma % 11);
//     let digitoVerificador =  resto > 9? 0: resto;
//     return digitoVerificador;
// }

// //05939447392
// const cpf = '583.131.360-30';
// const cpfLimpo = cpf.replace(/\D+/g,  '');
// console.log(cpfLimpo);
// const digitosVerificadores = String(primeiroNumero(cpfLimpo)) + segundoNumero(cpfLimpo);

// const cpfArray = Array.from(cpfLimpo);
// const cpfArrayDigitos = cpfArray.splice(-2)
// const digitosArray = Array.from(digitosVerificadores);

// if(String(cpfArrayDigitos) === String(digitosArray)) {
//     console.log('O cpf é válido');
// } else {
//     console.log('O cpf é inválido');
// }

