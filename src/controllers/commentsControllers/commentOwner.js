const { owner } = require("../../database/queries");
const asimpleComment = require("./asimpleComment");

const getCommentOwner = (comment) => {
    return owner(comment.OWNER)
        .then(data => comment.OWNER = data.rows[0].username)
        .then(() => asimpleComment(comment));
};

module.exports = getCommentOwner;