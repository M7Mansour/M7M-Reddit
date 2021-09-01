const { numberOfComments, postOwner } = require("../../database/queries");
const asimplePost = require("./asimplePost");

const getCommentsOwner = (post) => {
    const temp = { postData: post };
    return numberOfComments(post.id)
        .then(data => temp.comments = data.rows[0].num_comments)
        .then(() => postOwner(post.OWNER))
        .then(data => temp.owner = data.rows[0].username).then(() => asimplePost(temp));
};

module.exports = getCommentsOwner;