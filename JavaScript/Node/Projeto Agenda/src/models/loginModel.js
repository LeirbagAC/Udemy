const mongoose = require('mongoose');
const validator = require('validator');
const bcryptjs = require('bcryptjs');

const LoginSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const LoginModel = mongoose.model('Login', LoginSchema);

class Login {
    constructor(body) {
        this.body = body;
        this.erros = [];
        this.user = null;
    };

    async login() {
        this.valida();
        if(this.erros.length > 0) return;

        this.user = await LoginModel.findOne({ email: this.body.email });

        if(!this.user) {
            this.erros.push('Usuário não existe.');
            return;
        }

        if(!bcryptjs.compareSync(this.body.password, this.user.password)) {
            this.erros.push('Senha Inválida.');
            this.user = null;
            return;
        }
    }

    async register() {
        this.valida();
        if(this.erros.length > 0) return;
        
        await this.userExists();

        if(this.erros.length > 0) return;
        
        const salt = bcryptjs.genSaltSync();
        this.body.password = bcryptjs.hashSync(this.body.password, salt);

        this.user = await LoginModel.create(this.body);

    }

    async userExists() {
        this.user = await LoginModel.findOne({ email: this.body.email });
        if(this.user) this.erros.push('Usuário já existe.');
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