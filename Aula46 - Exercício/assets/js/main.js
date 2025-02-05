const timer = document.querySelector('.timer');
let segundos = 0; 
let intervalo;

//CONVERTE OS SEGUNDOS PARA AS OUTRAS UNIDADES DE TEMPO E PREENCHE O LADO ESQUERDO COM '0' CASO TENHA SÓ UM DIGITO
function formatTimer(segundos) { 
    const hours = Math.floor(segundos / 3600);
    const min = Math.floor((segundos % 3600) / 60);
    const secs = Math.floor(segundos % 60);

    return `${String(hours).padStart(2, '0')}:${String(min).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
}

function iniciarTimer() {
    if (intervalo) return ; //SERVE PARA IMPEDIR QUE SEJAM CRIADOS MÚLTIPLOS INTERVALOS

    timer.classList.remove('timerVermelho'); //REMOVE ESSA CLASS NO CSS
    timer.classList.add('timerPreto');

    intervalo = setInterval(() => {
        segundos++;
        timer.innerHTML = formatTimer(segundos);
    }, 1000);
}

function pausarTimer() {
    clearInterval(intervalo); 
    intervalo = null;
    timer.classList.remove('timerPreto');
    timer.classList.add('timerVermelho');
}

function zerarTimer() { 
    clearInterval(intervalo);
    intervalo = null;
    segundos = 0;
    timer.innerHTML = formatTimer(segundos);
    timer.classList.remove('timerVermelho');
    timer.classList.add('timerPreto');
}