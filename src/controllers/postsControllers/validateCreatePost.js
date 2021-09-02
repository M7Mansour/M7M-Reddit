const validateCategoryPost = require("./validateCategoryPost");

const validateCreatePost = (type, category, title, content) => {
    const validation = {
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