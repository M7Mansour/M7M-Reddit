const validateCategoryPost = require("./validateCategoryPost");

const validateCreatePost = (username, type, category, title, content) => {
    const validation = {
        username: /^[a-z]{1}[a-zA-Z0-9]{4,29}$/.test(username) && username !== undefined,
        type: type === 'url' || type === 'text',
        category: validateCategoryPost(category, 1),
        title: title && title.length >= 1,
        content: content && content.length >= 1
    };

    for (part in validation)
        if (!validation[part])
            return false;
    return true;
};

module.exports = validateCreatePost;