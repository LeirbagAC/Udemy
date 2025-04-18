function mostrarHora () {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {hour12: false});
}

// const timer = setInterval(function () {
//     console.log(mostrarHora());
// }, 1 * 1000);

// setTimeout(function () {
//     clearInterval(timer);
//     console.log('Ola, mundo');
// },3 * 1000);

//              OUTRA MANEIRA DE FAZER
//Usando uma arrow function
const timer = setInterval(() => {
    console.log(mostrarHora());
}, 1000)

setTimeout(() => {
    clearInterval(timer);
    console.log('Olá, Mundo!');
}, 4 * 1000)

//                  OUTRA MANEIRA DE FAZER
// function logHora() {
//     console.log(mostrarHora());
// }

// function stopInterval() {
//     clearInterval(timer);
//     console.log('Ola, mundo');
// }

// const timer = setInterval(logHora, 1000);
// setTimeout(stopInterval, 5000);