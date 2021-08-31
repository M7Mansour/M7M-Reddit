const clearCookies = (res) => {
    res.clearCookie('logedin');
    res.clearCookie('username');
    res.clearCookie(process.env.AUTH_COOKIE);
};

module.exports = clearCookies;