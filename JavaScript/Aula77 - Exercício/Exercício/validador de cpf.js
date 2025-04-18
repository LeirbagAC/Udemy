/* 
let cfp = '059.394.473-92';
let cpfLimpo = cfp.replace(/\D+/g, ''); //Para remover qualquer coisa que não seja um número
// console.log(cpfLimpo);
let cpfArray = Array.from(cpfLimpo);
// console.log(cpfArray);
console.log(cpfArray.reduce((acumulador, valor) => acumulador + Number(valor), 0));
const nome = 'Gabriel'
let nomeArray = Array.from(nome);
// console.log(nomeArray);

05939447392
0x 5x 9x 3x 9x 4x 4x 7x 3x
10 9  8  7  6  5  4  3  2 
0  45 72 21 54 20 16 21 6 = 255

11 - (255 % 11) = 9
se o número que sair da conta for > que 9, então ele será 0.

0x 5x 9x 3x 9x 4x 4x 7x 3x 9x
11 10 9  8  7  6  5  4  3  2 
0  50 81 24 63 24 20 28 9  18 = 317

11 - (317 % 11) = 2
*/

function primeiroNumero(cpf) {
    //verifica se o cpf é vazio
    if(cpf.length === 0) return console.log('cpf vazio');

    //verifica se todos são iguais
    const primeiroChar = cpf[0];
    let todosIguais = true; // Assume que todos são iguais inicialmente

    for(let i = 1; i < cpf.length; i++) {
        if(cpf[i] !== primeiroChar) {
            todosIguais = false; // Se algum caractere não for igual, marca como falso
            break; // Interrompe o loop, pois já sabemos que não são todos iguais
        }
    }
    if(todosIguais) {
        console.log('todos os dígitos iguais, inválido por definição'); 
        return false; // Retorna falso para indicar CPF inválido
    }

    let soma = 0;
    for(let i = 0; i < (cpf.length - 2); i++) {
        soma += Number(cpf[i]) * (10 - i);
    }

    let resto = 11 - (soma % 11);
    let digitoVerificador = resto > 9 ? 0: resto;
    return digitoVerificador;
}

function segundoNumero(cpf) {
    let soma = 0;       
    for(let i = 0; i < (cpf.length - 1); i++) {
        soma += Number(cpf[i]) * (11 - i);
    }
    let resto = 11 - (soma % 11);
    let digitoVerificador =  resto > 9? 0: resto;
    return digitoVerificador;
}

//05939447392
const cpf = '583.131.360-30';
// const cpf = '111.111.111-11';
const cpfLimpo = cpf.replace(/\D+/g,  '');
// console.log(cpfLimpo);
const digitosVerificadores = String(primeiroNumero(cpfLimpo)) + segundoNumero(cpfLimpo);

const cpfArray = Array.from(cpfLimpo);
const cpfArrayDigitos = cpfArray.splice(-2)
const digitosArray = Array.from(digitosVerificadores);

if(String(cpfArrayDigitos) === String(digitosArray)) {
    console.log('O cpf é válido');
} else {
    console.log('O cpf é inválido');
}

