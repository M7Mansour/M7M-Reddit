const { signup, getSignupPage } = require('./signupControllers');
const { login, getLoginPage } = require('./loginControllers');
const { fetchPosts } = require('./postsControllers');

module.exports = { signup, getSignupPage, login, getLoginPage, fetchPosts };