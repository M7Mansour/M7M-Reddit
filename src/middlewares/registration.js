const { createCookies, clearCookies } = require('../utilities');

const registration = (req, res, next) => {
    if (!req.body.logedUser) {
        clearCookies(res);
        next();
    } else {
        const endpoint = req.path.split('/')[1];
        if (endpoint === 'signup' || endpoint === 'login') {
            createCookies(res, req.body.logedUser, true, false);
            res.redirect('/');
        } else next();
    }
};

module.exports = registration;