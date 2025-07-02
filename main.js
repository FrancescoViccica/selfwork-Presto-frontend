let navbar = document.querySelector('.navbar');
let links = document.querySelectorAll('.nav-link');
let collapse = document.querySelector('#collapse');
let strawhat = document.querySelector('#strawHat');
let logo = document.querySelector('.logo');

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

// NUMERI INCREMENTALI
let firstNumber = document.querySelector('#firstNumber');
let secondNumber = document.querySelector('#secondNumber');
let thirdNumber = document.querySelector('#thirdNumber');

let conferma = true;


function createInterval(n, element, time) {
    let counter = 0;
    
    let interval = setInterval(()=>{
        if (counter < n) {
            counter++
            element.innerHTML = counter;
        }else{
            console.log('Adesso mi fermo');
            clearInterval(interval);
        }
    }, time);
    
    setTimeout(()=>{
        conferma = true;
    }, 8000);
};

let observer = new IntersectionObserver( (entries)=>{
    // entries = []
    // Se entries è un array, per poter far un qualcosa per ogni singolo elemento dall'array entries facciamo partire un forEach()
    entries.forEach((entry)=>{
        // Per ogni singola entry, se la incontri, se la intersechi...
        if(entry.isIntersecting && conferma){
            // ...fai partire le seguenti funzioni
            createInterval(108, firstNumber, 50);
            createInterval(1133, secondNumber, 6);
            createInterval(516, thirdNumber, 10);
            conferma = false;
        }
    })
});

observer.observe(firstNumber);
// FINE NUMERI INCREMENTALI

let reviews = [
    {user : 'Giorgio', description : `Gomu Gomu - Nooo`, rank : 5 },
    {user : 'Alfonso', description : `Veramente orrendo...troppo lungo`, rank : 1 },
    {user : 'Roberto', description : `Bella trama`, rank : 3 },
    {user : 'Francesco', description : `Il mio preferito rimane Dragonball `, rank : 4 },
    
]

let swiperWrapper = document.querySelector('.swiper-wrapper');

reviews.forEach((recensione)=>{
    let div = document.createElement('div');
    div.classList.add('swiper-slide');
    div.innerHTML = `
        <div class="swiper-slide">
            <div class="card-review">   
                <p class="h2 text-center">${recensione.user}</p>
                <p class="lead text-center">${recensione.description}</p>
                    <div class="d-flex justify-content-center star">

                    </div>
            </div>
        </div>
    `;
    swiperWrapper.appendChild(div);
})

let stars = document.querySelectorAll('.star');
// console.log(stars);

stars.forEach((star, index)=>{
    
    for(let i = 1 ; i <= reviews[index].rank ; i++){
        let icon = document.createElement('i');
        icon.classList.add('fa-solid' , 'fa-star');
        star.appendChild(icon);
    };
    
    let difference = 5 - reviews[index].rank;
    
    for(let i = 1 ; i <= difference ; i++){
        let icon = document.createElement('i');
        icon.classList.add('fa-regular' , 'fa-star');
        star.appendChild(icon);
    };
    });

// SWIPER
const swiper = new Swiper('.swiper', {
  // Optional parameters
    effect: "flip",
    grabCursor: true,
    loop: true,
    autoplay: {
        delay: 2500,},
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
});
// fINE SWIPER

