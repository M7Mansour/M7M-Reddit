const validatelogin = (userNameEmail, password) => {
    const validation = {
        userName: true,
        email: true,
        password: true,
    };
    validation.userName = /^[a-z]{1}[a-zA-Z0-9]{4,29}$/.test(userNameEmail) && userNameEmail !== undefined;
    validation.email = /(?=^.{0,320}$)(^[a-zA-Z0-9]{1,64}@[a-zA-Z0-9]{1,255}(\.{1}[a-zA-Z]+)*$)/.test(userNameEmail) && userNameEmail.split('@')[1].length <= 255;
    validation.password = /^(((?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]))|((?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*]))|((?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])))(?=.{8,})/.test(password);

    const validationMethod = validation.userName ? 'userName' : validation.email ? 'email' : false;
    if (!validationMethod || !validation.password)
        return { message: 'validation error' };
    else return { validationMethod };
};

module.exports = validatelogin;