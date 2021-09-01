const calculateTime = require('./calculateTime');

const asimplePost = (data) => {
    data.postData.post_time = calculateTime(data.postData.post_time);
    return {...data.postData, comments: data.comments, owner: data.owner };
};

module.exports = asimplePost;