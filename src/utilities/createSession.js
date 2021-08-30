const { sign } = require('jsonwebtoken');

const createSession = (userName) => {
    const cookiePayload = {
        userName
    };
    const cookie = sign(cookiePayload, process.env.SECRET_KEY);
    return cookie;
};

module.exports = createSession;