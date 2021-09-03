const clearCookies = require("../../utilities/clearCookies");

const logout = (req, res) => {
    clearCookies(res);
    res.redirect('/');
};

module.exports = logout;