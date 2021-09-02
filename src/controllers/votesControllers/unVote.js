const { deleteVote, ownerID } = require('../../database/queries');
const validate = require('./validate');

const unVote = (req, res) => {
    const { OWNER, id } = req.body;
    const userName = req.body.logedUser;
    if (!validate(id) || userName !== OWNER)
        return res.status(403).json({ message: 'forbidden' });

    ownerID(userName)
        .then(data => data.rows[0].id)
        .then(userID => deleteVote(userID, id))
        .then(() => res.json({ message: 'unvote success' }))
        .catch(err => res.status(500).json({ message: 'internal server error' }));
};

module.exports = unVote;