const validateSignup = (userName, email, firstName, lastName, password) => {
    const validation = {
        userName: true,
        email: true,
        firstName: true,
        lastName: true,
        password: true,
    };
    validation.userName = /^[a-z]+[a-zA-Z0-9]{4,29}$/.test(userName) && userName !== undefined;
    validation.email = /(?=^.{0,320}$)(^[a-zA-Z0-9]{1,64}@[a-zA-Z0-9]{1,255}(\.{1}[a-zA-Z]+)*$)/.test(email) && email.split('@')[1].length <= 255;
    validation.firstName = /[a-zA-Z]{1,30}/.test(firstName) && firstName !== undefined;
    validation.lastName = /[a-zA-Z]{1,30}/.test(lastName) && lastName !== undefined;
    validation.password = /^(((?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]))|((?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*]))|((?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])))(?=.{8,})/.test(password);
    for (let field in validation)
        if (!validation[field])
            return `${field} format not valid`;
};

module.exports = validateSignup;