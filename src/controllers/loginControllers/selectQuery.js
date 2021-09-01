const { loginEmailQuery, loginUserNameQuery } = require('../../database/queries');

const validateQuery = (method, userNameEmail, password) => {
    if (method === 'userName')
        return loginUserNameQuery(userNameEmail, password);
    if (method === 'email')
        return loginEmailQuery(userNameEmail, password);
};

module.exports = validateQuery;