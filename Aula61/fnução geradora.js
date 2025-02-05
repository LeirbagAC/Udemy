function* geradora1() {
    yield 'Valor 1';
    yield 'Valor 2';
    yield 'Valor 3';
}

const g1 = geradora1(); 
console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next());

console.log('###########################');

function* processarDados() {
    yield 'Iniciando processamento...';
    yield console.log('Processando...');
    yield console.log('Finalizando processamento...');
}

const processador = processarDados();

console.log(processador.next()); // Iniciando processamento...
processador.next().value; // Processando...
processador.next(); // Finalizando processamento...
