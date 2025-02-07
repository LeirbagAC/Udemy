function criarCalculadora () {
    return {
        display: document.querySelector('.display'),
        
        inicia() {
            this.cliqueBotoes();
            this.pressinonaEnter();
        },

        pressinonaEnter() {
            this.display.addEventListener('keypress', (e) => {
                if (e.keyCode === 13) { // Tecla Enter
                    this.realizaConta();
                }
            });
        },        

        clearDisplay() {
            this.display.value = ''; 
        },

        realizaConta() {
            let conta = this.display.value;

            try {
                conta = eval(conta);

                if(!conta) {
                    alert('Conta Iválida');
                    return;
                }

                this.display.value = conta;
            } catch(e) {
                alert('Conta Iválida');
                return;
            }
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0,  -1);
        },

        
        cliqueBotoes() {
            document.addEventListener('click', function (e){
                const el = e.target;
                
                if(el.classList.contains('btn-num')) {
                    this.btnParaDisplays(el.innerText);
                }

                if(el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if(el.classList.contains('btn-del')) {
                    this.apagaUm();
                }

                if(el.classList.contains('btn-eq')){
                    this.realizaConta();
                }

            }.bind(this));
        },

        btnParaDisplays(valor) {
            this.display.value += valor
        }
    };
}

const calculadora = criarCalculadora();
calculadora.inicia();