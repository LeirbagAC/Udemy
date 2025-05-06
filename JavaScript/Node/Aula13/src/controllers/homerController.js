exports.paginaInicial = (req, res, next) => {
    res.render('index');
};

exports.trataPost = (req, res, next) => {
    res.send('Ei, eu sou  sua nova rota de POST');
};