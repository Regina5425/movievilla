const modal = document.querySelector('.modal');
const modalForm = document.querySelector('.reg');
const openModal = document.querySelectorAll('.open-modal');
const Submit = document.querySelector('.form_btn');
const signInBtn = document.querySelector(".signin-btn");
const signUpBtn = document.querySelector(".signup-btn");
const formBox = document.querySelector(".form-box");
const reg = document.querySelector('.reg');


openModal.forEach((Submit) => {
    Submit.addEventListener('click', (e) => {
        e.preventDefault();
        modal.classList.add('active');
        modalForm.classList.add('active');
    })
});


document.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
        modalForm.classList.remove('active');
    }
});

signUpBtn.addEventListener('click', function () {
    formBox.classList.add('active');
    reg.classList.add('active');
});

signInBtn.addEventListener('click', function () {
    formBox.classList.remove('active');
    reg.classList.remove('active');
});

// const formSignIn = document.querySelector('.form_signin');
// let error = document.querySelector(".error");

// formSignIn.addEventListener('submit', function (event) {
//     event.preventDefault();
//     checkTextInput('input[name="user"]', 'Имя');
//     checkTextInput('input[name="password"]', 'Пароль');
//     error.innerHTML = finalError;
// });

// error.innerHTML = finalError;

// function checkTextInput(selector, inputName) {
//     let input = document.querySelector(selector);
//     if (input.value.length > 1) {

//     }
//     else {
//         finalError += `Заполните поле ${inputName} <br>`;
//     }
// }

