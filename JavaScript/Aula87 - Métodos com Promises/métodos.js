function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min ) + min)
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') {
            reject('CAI NO ERRO'); //Fiz essa modificação apenas para parar a função e evita uma msg de erro
            return;
        }

        setTimeout(() => {
            resolve(msg.toUpperCase() + ' - Passei na Prommise');
        }, tempo);
    });
}

const promises = [
    'Primeiro valor', //Os valores vão sair na ordem da array
    esperaAi('Promise 1', 3000),
    esperaAi('Promise 2', 500),
    esperaAi('Promise 3', 1000),
    // esperaAi(1000, 1000),
    'Outro valor'
];

function baixarPagina() {
    const emCache = true;

    if(emCache) {
        return Promise.reject('Pagina em cache'); //Promise.resolve e Promise.reject
    } else {
        return esperaAi('Baixei a pagina', 2000);
    }
}

baixarPagina()
    .then(dadosPagina => {
        console.log(dadosPagina);
    })
    .catch(e => console.log(e));

Promise.all(promises)
.then(valor => {
    console.log(valor);
})
.catch( e => {
    console.log(e);
});

// const promises2 = [
//     esperaAi('Promise 1', rand(0, 3)),
//     esperaAi('Promise 2', rand(0, 3)),
//     esperaAi('Promise 3', rand(0, 3)),
// ];

// Promise.race(promises2) //O primeiro que terminar ou der erro vaiser o output
//     .then(valor => {
//         console.log(valor);
//     })
//     .catch( e => {
//         console.log(e);
//     });

