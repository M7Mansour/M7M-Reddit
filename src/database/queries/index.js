const { checkUserQuery, addUserQuery } = require('./signupQueries');
const { loginEmailQuery, loginUserNameQuery } = require('./loginQueries');
const { getAllPosts, getCategoryPosts, numberOfComments, postOwner } = require('./postsQueries');

module.exports = { checkUserQuery, addUserQuery, loginUserNameQuery, loginEmailQuery, getAllPosts, getCategoryPosts, numberOfComments, postOwner };