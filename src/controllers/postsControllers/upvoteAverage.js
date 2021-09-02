const upvoteAverage = (votes, upvotes) => {
    return Math.ceil(upvotes / votes * 100) || 0;
};

module.exports = upvoteAverage;