// const tresHoras = 60 * 60 *3 * 1000;
// const data = new Date(2019, 3, 20, 15, 14, 27, 999);
// const data = new Date("2019-04 20:20:59");
// console.log('Dia', data.getDate());
// console.log('Mês', data.getMonth() + 1);
// console.log('Ano', data.getFullYear());
// console.log('Horas', data.getHours());
// console.log('Minutos', data.getMinutes());
// console.log('Segundos', data.getSeconds());
// console.log('Milisegundos', data.getMilliseconds());
// console.log('Dia Semana', data.getDay());
// console.log(data.toString());

function zeroEsquerda(num) {
    return num >= 10? num: `0${num}`;
}

function formataData(data){
    const dia = zeroEsquerda(data.getDate());
    const mes = zeroEsquerda(data.getMonth() + 1);
    const ano = zeroEsquerda(data.getFullYear());
    const horas = zeroEsquerda(data.getHours());
    const minutos = zeroEsquerda(data.getMinutes());
    const segundos = zeroEsquerda(data.getSeconds());
    const diaSemana = zeroEsquerda(data.getDay());

    return `${diaSemana} ${dia}/${mes}/${ano} ${horas}:${minutos}:${segundos}`
}
const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);
