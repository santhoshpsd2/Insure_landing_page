const ham_close = document.querySelector('.ham_close_div');
const ham_icon = document.querySelector('.hamburger_icon');
const close_icon = document.querySelector('.close_icon');

const mobile_menu = document.querySelector('.mobile-menu');

// ham_close.addEventListener('click', ()=>{
//     ham_icon.classList.toggle('active');
//     close_icon.classList.toggle('active');
//     mobile_menu.classList.toggle('active');
// })

document.addEventListener('click', (e)=> {
    if((e.target.matches('[hamburger]'))||(e.target.matches('[close-icon]')))
    {
        ham_icon.classList.toggle('active');
        close_icon.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    }else  if(e.target.matches('[mobile-menu].active') || e.target.matches('[link]')){
     return
    
    } else{
        mobile_menu.classList.remove('active');
        close_icon.classList.remove('active');
        ham_icon.classList.remove('active');
    }

})