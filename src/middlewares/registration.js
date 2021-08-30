const registration = (req, res, next) => {
    if (!req.body.logedUser) {
        res.clearCookie('logedin');
        res.clearCookie('username');
        res.clearCookie(process.env.AUTH_COOKIE);
        next();
    } else {
        const endpoint = req.path.split('/')[1];
        if (endpoint === 'signup' || endpoint === 'login') {
            res.cookie('logedin', true);
            res.cookie('username', req.body.logedUser);
            res.redirect('/');
        } else next();
    }
};

module.exports = registration;