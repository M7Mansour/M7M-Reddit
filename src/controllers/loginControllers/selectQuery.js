const { loginEmailQuery, loginUserNameQuery } = require('../../database/queries');

const checkUser = (method) => {
    if (method === 'userName')
        return loginUserNameQuery;
    if (method === 'email')
        return loginEmailQuery;
};

module.exports = checkUser;