const { checkUserQuery, addUserQuery } = require('./signupQueries');
const { loginEmailQuery, loginUserNameQuery } = require('./loginQueries');
const { getAllPosts, getCategoryPosts, numberOfComments, owner, getSinglePost, getUserPosts, incrementViews } = require('./postsQueries');
const { postComments } = require('./commentsQueries');

module.exports = {
    checkUserQuery,
    addUserQuery,
    loginUserNameQuery,
    loginEmailQuery,
    getAllPosts,
    getCategoryPosts,
    numberOfComments,
    owner,
    getSinglePost,
    postComments,
    getUserPosts,
    incrementViews
};