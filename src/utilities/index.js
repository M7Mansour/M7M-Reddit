const createSession = require('./createSession');
const { hashPassword, comparePasswords } = require('./passwordHash');
const clearCookies = require('./clearCookies');
const createCookies = require('./createCookies');

module.exports = { createSession, hashPassword, comparePasswords, clearCookies, createCookies };