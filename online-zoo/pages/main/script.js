// burger
let burgerMenu = document.querySelector('.burger-menu');
let sideNav = document.querySelector('.sideNav');
let x = document.querySelector('.x-icon');
let background = document.querySelector('.background-page');

burgerMenu.addEventListener('click', () => {
    sideNav.classList.add('active');
    background.classList.add('active');
})
x.addEventListener('click', () => {
    sideNav.classList.remove('active');
    background.classList.remove('active');
})
background.addEventListener('click', (e) => {
    if(!e.target.classList.contains('sideNav')) {
    sideNav.classList.remove('active');
    background.classList.remove('active')
    }
})
// burger 

// popup
let popupOne = document.querySelector('.pop-up-one');
let popupTwo = document.querySelector('.pop-up-two');
let popupThree = document.querySelector('.pop-up-three');

let testimonOne = document.querySelector('.testimon-one');
let testimonTwo = document.querySelector('.testimon-two');
let testimonThree = document.querySelector('.testimon-three');
let test = document.querySelector('.test');

let closeOne = document.querySelector('.close-one');
let closeTwo = document.querySelector('.close-two');
let closeThree = document.querySelector('.close-three');

closeOne.addEventListener('click', (event) => {
    popupOne.classList.toggle('hidden'),
    test.classList.toggle('hidden');
})
closeTwo.addEventListener('click', (event) => {
    popupTwo.classList.toggle('hidden'),
    test.classList.toggle('hidden');
})
closeThree.addEventListener('click', (event) => {
    popupThree.classList.toggle('hidden'),
    test.classList.toggle('hidden');
})
testimonOne.addEventListener('click', () => {
    popupOne.classList.toggle('hidden'),
    test.classList.toggle('hidden');
})
testimonTwo.addEventListener('click', () => {
    popupTwo.classList.toggle('hidden'),
    test.classList.toggle('hidden');
})
testimonThree.addEventListener('click', () => {
    popupThree.classList.toggle('hidden'),
    test.classList.toggle('hidden');
})

popupOne.addEventListener('click', (event) => {
    if(event.target.classList.contains('pop-up-one')){
        popupOne.classList.toggle('hidden'),
        test.classList.toggle('hidden');
    }
})
popupTwo.addEventListener('click', (event) => {
    if(event.target.classList.contains('pop-up-two')){
        popupTwo.classList.toggle('hidden'),
        test.classList.toggle('hidden');
    }
})
popupThree.addEventListener('click', (event) => {
    if(event.target.classList.contains('pop-up-three')){
        popupThree.classList.toggle('hidden'),
        test.classList.toggle('hidden');
    }
})

// popup


new Swiper('.swiper', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    loop: true
    
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    slidesPerGroup: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    scrollbar: {
        el: '.testimons-scroll',
        draggable: true,
        dragSize: 100,
        snapOnRelease: true,
        enabled: true
      },
    
  });



  



