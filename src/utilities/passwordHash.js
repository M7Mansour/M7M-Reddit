const { hash, compare } = require('bcrypt');

const hashPassword = password => hash(password, 10);

const comparePasswords = (password, hashedPassword) => compare(password, hashedPassword);

module.exports = { hashPassword, comparePasswords };