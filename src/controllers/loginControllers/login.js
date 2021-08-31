const { createCookies } = require('../../utilities');
const validatelogin = require('./validation');
const checkUser = require('./checkUser');

const login = (req, res) => {
    const { userName, password } = req.body;
    const { validationMethod, message } = validatelogin(userName, password);
    if (message)
        return res.status(403).json({ message });
    checkUser(validationMethod, userName, password)
        .then(data => {
            if (!data.valid)
                return res.status(403).json({ message: `Incorrect ${validationMethod} or password` });
            createCookies(res, data.userName, true, true);
            res.redirect('/');
        }).catch(err => res.status(500).json({ message: 'Internal server error' }));
};

module.exports = login;