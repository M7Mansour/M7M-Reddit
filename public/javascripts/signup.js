const form = document.querySelector('form');
const inputs = document.querySelectorAll('input');
const invalids = document.querySelectorAll('.valid');
const constraints = document.querySelectorAll('.constraints');
const serverMessage = document.querySelector('#server-message');

const signup = (e) => {
    e.preventDefault();
    const reqBody = {
        userName: inputs[0].value,
        firstName: inputs[1].value,
        lastName: inputs[2].value,
        email: inputs[3].value,
        password: inputs[4].value
    };

    if (validate(reqBody)) {
        fetchRequest('/signup', 'POST', reqBody)
            .then(response => {
                if (response.redirected)
                    window.location.href = response.url;
                else return response.json();
            }).then(data => serverMessage.innerText = data.message);
    }
};

const checkInvalid = (element, valid, index) => {
    if (valid) {
        element.classList.remove('input-required');
        invalids[index].classList.remove('required');
        if (index !== 5)
            constraints[index].classList.remove('wrong');
    } else if (!element.classList[1]) {
        element.classList.add('input-required');
        invalids[index].classList.add('required');
        if (index !== 5)
            constraints[index].classList.add('wrong');
    }

    if (index === 5)
        invalids[index].innerText = 'password not match';
    else if (element.value.length === 0)
        invalids[index].innerText = 'required';
    else if (!valid)
        invalids[index].innerText = 'invalid';
};

const validate = (reqBody) => {
    const validation = [
        /^[a-z]{1}[a-zA-Z0-9]{4,29}$/.test(reqBody.userName),
        /[a-zA-Z]{1,30}/.test(reqBody.firstName),
        /[a-zA-Z]{1,30}/.test(reqBody.lastName),
        /(?=^.{0,320}$)(^[a-zA-Z0-9]{1,64}@[a-zA-Z0-9]{1,255}(\.{1}[a-zA-Z]+)*$)/.test(reqBody.email) && reqBody.email.split('@')[1].length <= 255,
        /^(((?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]))|((?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*]))|((?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])))(?=.{8,})/.test(reqBody.password),
    ];

    for (let i = 0; i < inputs.length; i++)
        checkInvalid(inputs[i], validation[i], i);

    checkInvalid(inputs[5], inputs[4].value === inputs[5].value, 5);

    for (let i = 0; i < validation.length; i++)
        if (!validation[i])
            return false;
    return inputs[4].value === inputs[5].value;
};

form.addEventListener('submit', (e) => signup(e));