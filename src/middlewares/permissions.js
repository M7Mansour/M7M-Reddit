const { createCookies, clearCookies } = require('../utilities');

const permissions = (req, res, next) => {
    const protectedEndpoints = [
        '/post/create',
        '/post/delete',
        '/comments/create',
        '/comments/delete',
        '/votes/upvote',
        '/votes/downvote',
        '/votes/unvote'
    ];

    const endpoint = req.path;
    if (!req.body.logedUser) {
        for (let i = 0; i < protectedEndpoints.length; i++) {
            if (protectedEndpoints[i] === endpoint)
                return res.status(403).json({ message: 'forbidden' });
        }

        next();
    } else next();
};

module.exports = permissions;