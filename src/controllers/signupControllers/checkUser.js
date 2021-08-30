const { checkUserQuery } = require('../../database/queries');

const checkUser = (userName, email) => {
    return checkUserQuery(userName, email)
        .then(data => {
            if (data.rows.length > 1)
                return 'userName and email are used by other users';
            else if (data.rows.length === 1) {
                if (data.rows[0]['username'] !== userName)
                    return 'email is used by another user';
                else if (data.rows[0]['email'] !== email)
                    return 'userName is used by another user';
                else return 'user already exists, try to login';
            }
        });
};

module.exports = checkUser;