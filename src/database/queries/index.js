const { checkUserQuery, addUserQuery } = require('./signupQueries');
const { loginEmailQuery, loginUserNameQuery } = require('./loginQueries');

module.exports = { checkUserQuery, addUserQuery, loginUserNameQuery, loginEmailQuery };