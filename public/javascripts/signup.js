const form = document.querySelector('form');
const inputs = document.querySelectorAll('input');

const signup = (e) => {
    console.log(inputs);
    e.preventDefault();
    const reqBody = {
        userName: inputs[0].value,
        firstName: inputs[1].value,
        lastName: inputs[2].value,
        email: inputs[4].value,
        password: inputs[5].value
    };
    fetchRequest('/signup', 'POST', reqBody);
};

const validate = (reqBody) => {
    const validation = {
        userName: /^[a-z]{1}[a-zA-Z0-9]{4,29}$/.test(reqBody.userName) && reqBody.userName,
        email: /(?=^.{0,320}$)(^[a-zA-Z0-9]{1,64}@[a-zA-Z0-9]{1,255}(\.{1}[a-zA-Z]+)*$)/.test(reqBody.email) && reqBody.email.split('@')[1].length <= 255,
        firstName: /[a-zA-Z]{1,30}/.test(reqBody.firstName) && reqBody.firstName,
        lastName: /[a-zA-Z]{1,30}/.test(reqBody.lastName) && reqBody.lastName,
        password: /^(((?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]))|((?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*]))|((?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])))(?=.{8,})/.test(reqBody.password),
    };
};

form.addEventListener('submit', (e) => signup(e));