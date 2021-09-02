const { checkVote, createVote, updateVote, ownerID } = require('../../database/queries');
const validate = require('./validate');

const upVote = (req, res) => {
    const { OWNER, id } = req.body;
    const userName = req.body.logedUser;
    if (!validate(id) || userName !== OWNER)
        return res.status(403).json({ message: 'forbidden' });
    let userid;
    ownerID(userName)
        .then(data => data.rows[0].id)
        .then(userID => {
            userid = userID;
            return checkVote(userID, id)
        })
        .then(data => data.rows)
        .then(data => {
            if (data.length === 0)
                return false;
            return data[0]['vote_type'];
        }).then(exists => {
            if (!exists)
                return createVote(userid, id, 1);
            if (exists === -1)
                return updateVote(userid, id, 1);
        }).then(() => res.json({ message: 'upvote success' }))
        .catch(err => res.status(500).json({ message: 'internal server error' }));
};

module.exports = upVote;