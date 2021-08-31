const { join } = require('path');

const getLoginPage = (req, res) => {
    res.sendFile(join(__dirname, '..', '..', '..', 'public', 'views', 'login.html'));
};

module.exports = getLoginPage;