const validateCategoryPost = (category, postID, userid) => {
    if (userid)
        return Number.isInteger(userid - 0);

    if (postID && !Number.isInteger(postID - 0))
        return false;

    const categories = [
        'all',
        'music',
        'funny',
        'videos',
        'programming',
        'news',
        'fashion'
    ];

    let i = postID ? 1 : 0;
    for (; i < categories.length; i++)
        if (category === categories[i])
            return true;
    return false;
};

module.exports = validateCategoryPost;