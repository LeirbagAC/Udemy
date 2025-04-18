// const resul = document.querySelector('.resul');
// const data = new Date();
// const diaSemana = data.getDay();
// const dia = data.getDate();
// const mes = data.getMonth();
// const ano = data.getFullYear();
// const horas = data.getHours();
// const min = data.getMinutes();

// function getdiaSemanaTexto(diaSemana){
//     let diaSemanaTexto;

//     switch (diaSemana) {
//         case 0:
//             diaSemanaTexto = 'Domingo';
//             break;
//         case 1:
//             diaSemanaTexto = 'Segunda';
//             break;
//         case 2:
//             diaSemanaTexto = 'Terça';
//             break;
//         case 3:
//             diaSemanaTexto = 'Quarta';
//             break;
//         case 4:
//             diaSemanaTexto = 'Quinta';
//             break;
//         case 5:
//             diaSemanaTexto = 'Sexta';
//             break;
//         case 6:
//             diaSemanaTexto = 'Sabado';
//             break;
//         default:
//             diaSemanaTexto = '';
//             break;
//     }
//     return diaSemanaTexto;
// }

// function getMesTexto(mes){
//     let mesTexto;

//     switch (mes) {
//         case 0:
//             mesTexto = 'Janeiro';
//             break;
//         case 1:
//             mesTexto = 'Fevereiro';
//             break;
//         case 2:
//             mesTexto = 'Março';
//             break;
//         case 3:
//             mesTexto = 'Abril';
//             break;
//         case 4:
//             mesTexto = 'Maio';
//             break;
//         case 5:
//             mesTexto = 'Junho';
//             break;
//         case 6:
//             mesTexto = 'Julho';
//             break;
//         case 7:
//             mesTexto = 'Agosto';
//             break;
//         case 8:
//             mesTexto = 'Setembro';
//             break;
//         case 9:
//             mesTexto = 'Outubro';
//             break;
//         case 10:
//             mesTexto = 'Novembro';
//             break;
//         case 11:
//             mesTexto = 'Dezembro';
//             break;
//         default:
//             mesTexto = '';
//             break;
//     }
//     return mesTexto;
// }

// let diaSemanaTexto = getdiaSemanaTexto(diaSemana);
// let mesTexto = getMesTexto(mes);

// resul.innerHTML = `${diaSemanaTexto}, ${dia} de ${mesTexto} de ${ano} ${horas}:${min}`


const resul = document.querySelector('.resul');
const data = new Date();
resul.innerHTML = data.toLocaleString('pt-BR', {dateStyle: "full", timeStyle: "short"});

