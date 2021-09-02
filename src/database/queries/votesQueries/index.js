const checkVote = require("./checkVote");
const createVote = require("./createVote");
const deleteVote = require("./deleteVote");
const getPostUpvotes = require("./getPostUpvotes");
const getPostVotes = require("./getPostVotes");
const updateVote = require("./updateVote");

module.exports = { checkVote, createVote, deleteVote, updateVote, getPostVotes, getPostUpvotes };