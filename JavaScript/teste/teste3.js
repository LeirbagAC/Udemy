function tudoIgual(texto) {
    if(texto.length === 0) return console.log('Texto vazio');

    const primeiroChar = texto[0]
    let tudoIgual = true;

    for(let i = 1; i < texto.length; i++) {
        if(texto[i] !== primeiroChar) {
            tudoIgual = false;
            break;
        }
    }
    
    if(tudoIgual) {
        console.log('Tudo igual');
    } else {
        console.log('Diferente');
    }
    
}

const texto = '11111';
tudoIgual(texto);