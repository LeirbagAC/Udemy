function CriarCalculadora() {
    const display = document.querySelector('.display');

    this.iniciar = () => { //Arow function são mais práticas 
        this.cliqueBotoes();
    };

    this.clearDisplay =  () => {
        display.value = ' ';
    };

    this.realizaConta = () => {
        let conta = display.value;

        try {
            conta = eval(conta);

            if(!conta) {
                alert('Conta Iválida');
                return;
            }

            display.value = conta;
        } catch(e) {
            alert('Conta Iválida');
            return;
        }
    };

    this.apagarUm = () => {
        display.value = display.value.slice(0, -1);
    };

    this.cliqueBotoes = function() {
        document.addEventListener('click', (e) => {
            const el = e.target;
            
            if(el.classList.contains('btn-num')) {
                this.btnParaDisplays(el.innerText);
            }

            if(el.classList.contains('btn-clear')) {
                this.clearDisplay();
            }

            if(el.classList.contains('btn-del')) {
                this.apagarUm();
            }

            if(el.classList.contains('btn-eq')) {
                this.realizaConta() ;
            }

        });
    };

    this.btnParaDisplays = function(valor) {
        display.value += valor;
    };
}

const calculadora = new CriarCalculadora();
calculadora.iniciar();