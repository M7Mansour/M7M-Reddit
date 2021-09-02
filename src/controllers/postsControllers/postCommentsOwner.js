const { numberOfComments, owner, checkVote, getPostVotes, ownerID, getPostUpvotes } = require("../../database/queries");
const asimplePost = require("./asimplePost");

const addPostInf = (post, userName) => {

    return numberOfComments(post.id)
        .then(data => post.comments = data.rows[0].num_comments)
        .then(() => owner(post.OWNER))
        .then(data => post.owner = data.rows[0].username)
        .then(() => ownerID(userName))
        .then(data => data.rows[0])
        .then((user) => checkVote(user ? user.id : user, post.id))
        .then(data => data.rows)
        .then(votes => {
            if (votes.length === 0)
                post.userVote = 0;
            else post.userVote = votes[0].vote_type;
        })
        .then(() => getPostVotes(post.id))
        .then(data => data.rows.length)
        .then(votesNumber => post.votes = votesNumber)
        .then(() => getPostUpvotes(post.id))
        .then(data => data.rows.length)
        .then(upvotes => post.upvotes = upvotes)
        .then(() => asimplePost(post));
};

module.exports = addPostInf;