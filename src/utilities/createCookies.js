const createSession = require('./createSession');

const createCookies = (res, userName, logedin, authCookie) => {
    if (authCookie)
        res.cookie(process.env.AUTH_COOKIE, createSession(userName), { httponly: true, secure: true });
    res.cookie('logedin', logedin);
    res.cookie('username', userName);
};

module.exports = createCookies;