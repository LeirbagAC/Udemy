const Login = require('../models/loginModel');

exports.index = (req, res) => {
    res.render('login');
};

exports.register = async (req, res) => {
    try {
    const login = new Login(req.body);
    await login.register();

    if(login.erros.length > 0) {
        req.flash('erros', login.erros)
        req.session.save( () => {
            return res.redirect('/login/index');
        });
        return;
    }

        req.flash('success', 'Seu usuário foi criado com sucesso.')
        req.session.save( () => {
        return res.redirect('/login/index');
        });
    // return res.send(login.erros); Isso estava dando erro

    } catch(e) {
        console.log(e);
        return res.render('404');
    }


};

exports.login = async (req, res) => {
    try {
    const login = new Login(req.body);
    await login.login();

    if(login.erros.length > 0) {
        req.flash('erros', login.erros)
        req.session.save( () => {
            return res.redirect('/login/index');
        });
        return;
    }

        req.flash('success', 'Seu usuário foi criado com sucesso.')
        req.session.save( () => {
        return res.redirect('/login/index');
        });

    } catch(e) {
        console.log(e);
        return res.render('404');
    }


};