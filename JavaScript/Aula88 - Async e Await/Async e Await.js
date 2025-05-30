function rand(min = 0, max = 3) {
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

// esperaAi('Fase 1', rand())
//     .then(valor => {
//         console.log(valor);
//         return esperaAi('Fase 2', rand());
//     })
//     .then(fase => {
//         console.log(fase);
//         return esperaAi('Fase 3', rand());
//     })
//     .then(fase => {
//         console.log(fase);
//         return fase;
//     })
//     .then(fase => {
//         console.log('Terminamos ma fase: ', fase);
//     })
//     .catch(e => console.log(e));

//      CONVERÇÃO PARA Async / Await

async function executa() {
    try { //Usa-se o try e catch para poder fazer o resolve e reject
        const fase1 =  await esperaAi('fase 1', rand());
        console.log(fase1);
        
        const fase2 = await esperaAi('fase 2', rand());
        console.log(fase2);
        
        const fase3 = await esperaAi('fase 3', rand());
        console.log(fase3);
    
        console.log('Terminamos na fase: ', fase3);
    } catch(e) {
        console.log(e);
    }
}
executa();

//peding
//fullFilled
//reject