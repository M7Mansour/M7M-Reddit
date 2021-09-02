const createSession = require('./createSession');

const createCookies = (res, userName, logedin, authCookie) => {
    res.cookie('logedin', logedin);
    res.cookie('username', userName);
    if (authCookie)
        res.cookie(process.env.AUTH_COOKIE, createSession(userName), { httponly: true, secure: true });

};

module.exports = createCookies;