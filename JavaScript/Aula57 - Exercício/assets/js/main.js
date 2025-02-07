const display = document.querySelector('.display');

function appendButton(input) {
    display.value += input; 
}

function cleanDisplay() {
    display.value = '';
}

function calcular () {
    display.value = eval(display.value);
}