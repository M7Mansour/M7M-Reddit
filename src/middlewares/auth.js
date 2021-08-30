const { verify } = require('jsonwebtoken');

const authCheck = (req, res, next) => {
    const authCookie = req.cookies[process.env.AUTH_COOKIE];
    if (!authCookie)
        return next();
    verify(authCookie, process.env.SECRET_KEY, (err, data) => {
        if (err)
            return next();
        req.body.logedUser = data.userName;
        next();
    });
};

module.exports = authCheck;