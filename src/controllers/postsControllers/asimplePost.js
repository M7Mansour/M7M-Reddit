const calculateTime = require('./calculateTime');
const upvoteAverage = require('./upvoteAverage');

const asimplePost = (post) => {
    post.post_time = calculateTime(post.post_time);
    const upvotes = post.upvotes;
    post.upvotes = upvoteAverage(post.votes, post.upvotes);
    post.votes = upvotes - (post.votes - upvotes);
    return post;
};

module.exports = asimplePost;