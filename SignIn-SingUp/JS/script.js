const card = document.querySelector('.card');
const toLogin = document.querySelector('.to-login button');
const toRegister = document.querySelector('.to-register button');

toLogin.addEventListener('click', ()=>{
    card.classList.remove('register-active');
    card.classList.add('login-active');
});

toRegister.addEventListener('click', ()=>{
    card.classList.remove('login-active');
    card.classList.add('register-active');
});