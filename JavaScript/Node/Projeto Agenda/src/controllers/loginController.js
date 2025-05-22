const Login = require('../models/loginModel');

exports.index = (req, res) => {
    res.render('login');
};

exports.register = async (req, res) => {
    const login = new Login(req.body);
    await login.register();

    if(this.body.erros > 0) {
        req.flash('erros', login.erros)
    }

    res.send(login.erros);
};
