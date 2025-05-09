// const HomeModel = require('../models/HomeModel');

// HomeModel.create({
//     titulo: 'Outro título de teste',
//     descricao: 'Outra descrição de teste',
// })
//     .then(dados => console.log(dados))
//     .catch(e => console.log(e));

// HomeModel.find()
//     .then(dados => console.log(dados))
//     .catch(e => console.log(e));

exports.paginaInicial = (req, res) => {
    // console.log(req.session.usuario); //{ nome: 'Gabriel', logado: true }

    // req.flash('info', 'Olá, Mundo!');
    // req.flash('erro', 'gjvhgkf');
    // req.flash('success', 'ilsurbyg');
    // req.flash('teste', 'teste bem sucedido!');

    console.log(req.flash('info'), req.flash('erro'), req.flash('success'), req.flash('teste'));
    res.render('index');
    return;
};

exports.trataPost = (req, res) => {
    res.send(req.body);
    return;
};