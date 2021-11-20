const createSession = require('./createSession');
const { hashPassword, comparePasswords } = require('./passwordHash');
const clearCookies = require('./clearCookies');
const createCookies = require('./createCookies');
const { sendEmail } = require('./sendEmail');

module.exports = { createSession, hashPassword, comparePasswords, clearCookies, createCookies, sendEmail };