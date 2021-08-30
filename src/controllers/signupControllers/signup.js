const checkUser = require('./checkUser');
const createUser = require('./createUser');
const validateSignup = require('./validation');

const signup = (req, res, next) => {
    const { userName, email, firstName, lastName, password } = req.body;
    const validation = validateSignup(userName, email, firstName, lastName, password);
    if (validation)
        return res.status(403).json({ message: validation });

    checkUser(userName, email).then((exists) => {
            if (exists) {
                throw { message: exists, cause: 'validation error' };
            }
        }).then(() => createUser(userName, email, firstName, lastName, password))
        .then(authCookie => {
            res.cookie(process.env.AUTH_COOKIE, authCookie, { httponly: true, secure: true });
            res.cookie('logedin', true);
            res.cookie('username', userName);
            res.redirect('/');
        }).catch((err) => {
            if (!err.cause)
                res.status(500).json({ message: 'internal server error' });
            else res.status(403).json({ message: err.message });
        });
};

module.exports = signup;