const resultado = document.querySelector('.resultado');

const caracteres = document.querySelector('#length');
const numeros = document.querySelector('#numbers');
const upperCase = document.querySelector('#uppercase');
const lowerCase = document.querySelector('#lowercase');
const symbols = document.querySelector('#symbols');

const button = document.querySelector('#gerar-senha');

export default class GeraSenha {
    constructor(caracteres, numeros, upperCase, lowerCase, symbols) {
        this.caracteres = caracteres;
        this.numeros = numeros;
        this.upperCase = upperCase;
        this.lowerCase = lowerCase;
        this.symbols = symbols
    };
    
    tamanho() { 
        return Number(this.caracteres.value);
    }

    getNumeros() {
        return '0123456789';
    }

    getUpperCase() {
        return 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }

    getLowerCase() {
        return 'abcdefghijklmnopqrstuvwxyz';
    }
    
    getSymbols() {
        return '!@#$%^&*()_+-=[]{}|;:,.<>?';
    }
    
    gera() {
        const tamanhoSenha = this.tamanho();
        let caracteresPossiveis = '';
        let senha = '';

        if(this.numeros.checked) {
            caracteresPossiveis += this.getNumeros();
        }

        if(this.upperCase.checked) {
            caracteresPossiveis += this.getUpperCase();
        }

        if(this.lowerCase.checked) {
            caracteresPossiveis += this.getLowerCase();
        }

        if(this.symbols.checked) {
            caracteresPossiveis += this.getSymbols();
        }

        if (caracteresPossiveis === '') {
            resultado.textContent = 'Selecione pelo menos uma opção!';
            return;
        }

        for(let i = 0; i < tamanhoSenha; i++) {
            const randIndex = Math.floor(Math.random() * caracteresPossiveis.length);
            senha += caracteresPossiveis[randIndex]
        }

        resultado.innerHTML = senha;
        return senha;
    }
    
}

const gerador = new GeraSenha(caracteres, numeros, upperCase, lowerCase, symbols);

button.addEventListener('click', () => {
    gerador.gera()  
})

