const calculateTime = require('./calculateTime');
const upvoteAverage = require('./upvoteAverage');

const asimplePost = (post) => {
    post.post_time = calculateTime(post.post_time);
    post.upvotes = upvoteAverage(post.votes, post.upvotes);
    return post;
};

module.exports = asimplePost;