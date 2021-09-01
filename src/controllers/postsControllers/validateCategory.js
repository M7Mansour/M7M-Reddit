const validateCategory = (category) => {
    const categories = [
        'all',
        'music',
        'funny',
        'videos',
        'programming',
        'news',
        'fashion'
    ];
    for (let i = 0; i < categories.length; i++)
        if (category === categories[i])
            return true;
    return false;
};

module.exports = validateCategory;