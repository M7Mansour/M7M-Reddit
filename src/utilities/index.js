const createSession = require('./createSession');
const { hashPassword, comparePasswords } = require('./passwordHash');

module.exports = { createSession, hashPassword, comparePasswords };