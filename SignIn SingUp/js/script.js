const card = document.querySelector('.card')
const links = document.querySelectorAll('.title-container a');

links.forEach(link =>{
    link.addEventListener('click',(e)=>{
        e.preventDefault()
        
        if(card.classList.contains('login-active')){
            card.classList.remove('login-active')
            card.classList.add('register-active')
        } else{
            card.classList.remove('register-active')
            card.classList.add('login-active')
        }
    });
});