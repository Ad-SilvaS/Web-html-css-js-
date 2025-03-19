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

const tl = gsap.timeline({defaults: {
    duration: 2.5
}});

tl.from('.card', {
    opacity: 0,
    x: -2000
}),
tl.from('.left-card', {
    opacity: 0,
    y: -2000
}, '-= .2'),
tl.from('.right-card', {
    opacity: 0,
    y: 2000
}, '-= .2')
