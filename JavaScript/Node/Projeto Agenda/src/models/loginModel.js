const mongoose = require('mongoose');
const validator = require('validator');

const LoginSchema = new mongoose.Schema({
  email: { type: String, required: true },
  senha: { type: String, required: true },
});

const LoginModel = mongoose.model('Login', LoginSchema);

class Login {
    constructor(body) {
        this.body = body;
        this.erros = [];
        this.user = null;
    };

    async register() {
        this.valida();
        if(this.erros.length > 0) return;

        try {
            this.user = await LoginModel.create(this.body);
        } catch(e) {
            console.log(e);
        }
            
    }

    valida() {
        this.clearUp();

        //validaçao
        //O email precisa ser valido
        if(!validator.isEmail(this.body.email)) this.erros.push('Email inválido.');

        //A senha precisa ser maior que 3 e menor que 50 caracteres
        if(this.body.password < 3 || this.body.password > 50) {
            this.erros.push('A senha precisa ter entre 3 e 50 caracteres.');
        }

    };

    clearUp() {
        //Para garantir que é uma string e se caso não for converter para uma string vazia
        for(const key in this.body) {
            if(typeof this.body[key] !== 'string') {
                this.body[key] = '';
            }
        }

        this.body = {
            email: this.body.email,
            password: this.body.password
        };
    };

}

module.exports = Login;