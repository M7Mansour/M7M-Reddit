const validateQuery = require('./selectQuery');
const { comparePasswords } = require('../../utilities');

const checkUser = (method, userNameEmail, password) => {
    return validateQuery(method, userNameEmail, password)
        .then(data => data.rows).then(rows => {
            if (rows.length === 0)
                return false;
            return comparePasswords(password, rows[0].password)
                .then(equals => { return { valid: equals, userName: rows[0].username } });
        });
};

module.exports = checkUser;