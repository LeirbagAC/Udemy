class ValidaFormulario{
    constructor() {
        this.formulario = document.querySelector('.formulario');
        this.evento();
    }

    evento() {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e);
        });
    }

    handleSubmit(e) {
        e.preventDefault(); 
        const camposValidos = this.camposSaoValidos();  
        const senhasValidas = this.senhasValidas();

        if((camposValidos && senhasValidas === true)) {
            alert('Formulário enviado!');
            this.formulario.submit();
        }
    }

    senhasValidas() {
        let valid = true;

        const senha = this.formulario.querySelector('.senha');
        const repetirSenha = this.formulario.querySelector('.repetir-senha');

        if(senha.value !== repetirSenha.value) {
            valid = false;
            this.criaErro(senha, 'Senha e repetir senha precisam ser iguais');
            this.criaErro(repetirSenha, 'Senha e repetir senha precisam ser iguais');
        }
        
        if(senha.value.length < 6 || senha.value.length > 12) {
            this.criaErro(repetirSenha, 'Senha e repetir devem conter de 6 a 12 caracteres!');
            valid = false;
        }

        return valid;
    }

    camposSaoValidos() {
        let valid = true;

        for(let erroText of this.formulario.querySelectorAll('.erro-text')) {
            erroText.remove();
        }

        for(let campo of this.formulario.querySelectorAll('.validar')) {
            const label = campo.previousElementSibling.innerText;

            if(!campo.value) {
                this.criaErro(campo, `${label} não pode estar em branco!`);
                valid = false;
            }

            if(campo.classList.contains('cpf')) {
                if(!this.validaCPF(campo))  valid = false
            }

            if(campo.classList.contains('usuario')) {
                if(!this.validaUser(campo))  valid = false
            }
        }
        return valid;
    }

    validaUser(campo) {
        const user = campo.value;
        let valid = true;

        if(user.length < 3 || user.length > 12) {
            this.criaErro(campo, 'Usuário deve conter entre 3 e 12 caracteres!');
            valid = false;
        }

        if(!user.match(/[a-zA-Z0-9]+/g)) {
            this.criaErro(campo, 'Nome de usuário dve conter somente letras e/ou números!');
            valid = false;
        }
        return valid;
    }

    validaCPF(campo) {
        const cpf = new ValidaCPF(campo.value)

        if(!cpf.valida()) {
            this.criaErro(campo, 'CPF Inválido');
            return false;
        }

        return true;
    }

    criaErro(campo, msg){
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('erro-text');
        campo.insertAdjacentElement('afterend', div);
    }
}

const valida = new ValidaFormulario();