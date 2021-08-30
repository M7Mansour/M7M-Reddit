const { join } = require('path');

const getSignupPage = (req, res) => {
    res.sendFile(join(__dirname, '..', '..', '..', 'public', 'views', 'signup.html'));
};

module.exports = getSignupPage;