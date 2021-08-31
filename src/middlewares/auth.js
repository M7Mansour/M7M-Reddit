const { verify } = require('jsonwebtoken');
const { createCookies } = require('../utilities');

const authCheck = (req, res, next) => {
    const authCookie = req.cookies[process.env.AUTH_COOKIE];
    if (!authCookie)
        return next();
    verify(authCookie, process.env.SECRET_KEY, (err, data) => {
        if (err)
            return next();
        req.body.logedUser = data.userName;
        createCookies(res, req.body.logedUser, true, false);
        next();
    });
};

module.exports = authCheck;