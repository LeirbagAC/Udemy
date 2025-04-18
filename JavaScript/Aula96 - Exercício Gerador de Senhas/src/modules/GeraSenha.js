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

    getRandomChar(str) {
        const randIndex = Math.floor(Math.random() * str.length);
        return str[randIndex];
    }
    
    gera() {
        const tamanhoSenha = this.tamanho();

        if(tamanhoSenha < 4) {
            return resultado.innerHTML = 'Tamanho mínimo de 4 digitos'; 
        }

        if(tamanhoSenha > 20) {
            return resultado.innerHTML = 'Tamanho máximo de 20 digitos'; 
        }

        let caracteresPossiveis = '';
        let senha = [];

        if(this.numeros.checked) caracteresPossiveis += this.getNumeros();
        if(this.upperCase.checked) caracteresPossiveis += this.getUpperCase();
        if(this.lowerCase.checked) caracteresPossiveis += this.getLowerCase();
        if(this.symbols.checked) caracteresPossiveis += this.getSymbols();

        if (caracteresPossiveis === '') {
            return resultado.textContent = 'Selecione pelo menos uma opção!';
        }

        if(this.numeros.checked) senha.push(this.getRandomChar(this.getNumeros())); 
        if(this.upperCase.checked) senha.push(this.getRandomChar(this.getUpperCase())); 
        if(this.lowerCase.checked) senha.push(this.getRandomChar(this.getLowerCase())); 
        if(this.symbols.checked) senha.push(this.getRandomChar(this.getSymbols())); 

        const minimo = senha.length;
        for(let i = minimo; i < tamanhoSenha; i++) {
            senha.push(this.getRandomChar(caracteresPossiveis));
        }

        const senhaFinal = senha.join('');
        resultado.textContent = senhaFinal;
        return senhaFinal;
    }
    
}

const gerador = new GeraSenha(caracteres, numeros, upperCase, lowerCase, symbols);

button.addEventListener('click', () => {
    gerador.gera()  
})