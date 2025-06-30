let navbar = document.querySelector('.navbar');
let links = document.querySelectorAll('.nav-link');
let collapse = document.querySelector('#collapse');

window.addEventListener('scroll', ()=>{
    let scrolled = window.scrollY;
    if(scrolled > 0){
        navbar.classList.remove('bg-black');
        navbar.classList.add('bg-sand');
        navbar.style.height = '70px';
        collapse.classList.remove('bg-black');
        collapse.classList.add('bg-sand');
        
        links.forEach((link)=>{
            link.style.color = 'var(--black)';
        });
        
    }else{
        navbar.classList.add('bg-black');
        navbar.classList.remove('bg-sand');
        navbar.style.height = '140px';
        collapse.classList.remove('bg-sand');
        collapse.classList.add('bg-black');
        
        links.forEach((link)=>{
            link.style.color = 'var(--sand)';
        });
    }
})


let strawhat = document.querySelector('#strawHat');
let check = false

strawhat.addEventListener('click', ()=>{
    if (check == false) {
        strawhat.style.transform = 'rotate(45deg)';
        check = true;
    }else{
        strawhat.style.transform = 'rotate(0deg)';
        check = false;
    }
})