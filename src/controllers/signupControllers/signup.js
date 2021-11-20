const { createCookies, sendEmail } = require('../../utilities');
const checkUser = require('./checkUser');
const createUser = require('./createUser');
const validateSignup = require('./validation');

const signup = (req, res) => {
    const { userName, email, firstName, lastName, password } = req.body;
    const validation = validateSignup(userName, email, firstName, lastName, password);
    if (validation)
        return res.status(403).json({ message: validation });

    checkUser(userName, email).then((exists) => {
            if (exists)
                throw { message: exists, cause: 'validation error' };
        }).then(() => createUser(userName, email, firstName, lastName, password))
        .then(() => {
            createCookies(res, userName, true, true);
            res.redirect('/');
        }).then(() => sendEmail({subject: 'M7M-Reddit Sign up', text: 'Congrats you are a member of M7M Reddit now !'},email)
        .catch(err => console.log(err)))
        .catch((err) => {
            if (!err.cause)
                res.status(500).json({ message: 'internal server error' });
            else res.status(403).json({ message: err.message });
        });
};

module.exports = signup;