const validate = (id) => {
    return Number.isInteger(id - 0);
}

module.exports = validate;