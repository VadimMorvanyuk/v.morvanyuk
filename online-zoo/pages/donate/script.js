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


const inputs = document.querySelectorAll('input[type=number]');
Array.from(inputs).forEach(input => {
    const min = +input.min;
    const max = +input.max;

    input.addEventListener('input', (e) => {
        const value = +input.value;
        if (value > max) { input.value = max }
        else if (value < min) { input.value = min }
    }
)});




let circle1 = document.querySelector('.circle1');
let circle2 = document.querySelector('.circle2');
let circle3 = document.querySelector('.circle3');
let circle4 = document.querySelector('.circle4');
let circle5 = document.querySelector('.circle5');
let circle6 = document.querySelector('.circle6');
let circle7 = document.querySelector('.circle7');
let circle8 = document.querySelector('.circle8');

let circle = document.querySelectorAll('.circle');
circle.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active2')
    })
})
let inputValue = 0;
let input = document.querySelector('.numbers');
// input.addEventListener('input', (event) => {
//     console.log(inputValue = event.target.value)
//     inputValue = event.target.value
   
// })
let forms = document.querySelectorAll('.form_radio');
forms.forEach(item => {
    item.addEventListener('click', (event) => {
        input.value = event.target.value;
    })
//     if(inputValue == item.children[0].value){
//         item.classList.add('test')
//    }
    // if(input.value == 2000){
    //     item.children[1].classList.add('YES')
    // }
})


window.addEventListener('input', function (e) {
    if(input.value == 5000) {
        circle1.classList.add("active2");
        circle2.classList.remove("active2");
        circle3.classList.remove("active2");
        circle4.classList.remove("active2");
        circle5.classList.remove("active2");
        circle6.classList.remove("active2");
        circle7.classList.remove("active2");
        circle8.classList.remove("active2");
    } else if(input.value == 2000){
        circle2.classList.add("active2");
        circle1.classList.remove("active2");
        circle3.classList.remove("active2");
        circle4.classList.remove("active2");
        circle5.classList.remove("active2");
        circle6.classList.remove("active2");
        circle7.classList.remove("active2");
        circle8.classList.remove("active2");
    } else if(input.value == 1000){
        circle3.classList.add("active2");
        circle2.classList.remove("active2");
        circle1.classList.remove("active2");
        circle4.classList.remove("active2");
        circle5.classList.remove("active2");
        circle6.classList.remove("active2");
        circle7.classList.remove("active2");
        circle8.classList.remove("active2");
    } else if(input.value == 500){
        circle4.classList.add("active2");
        circle1.classList.remove("active2");
        circle2.classList.remove("active2");
        circle3.classList.remove("active2");
        circle5.classList.remove("active2");
        circle6.classList.remove("active2");
        circle7.classList.remove("active2");
        circle8.classList.remove("active2");
    } else if(input.value == 250){
        circle5.classList.add("active2");
        circle1.classList.remove("active2");
        circle2.classList.remove("active2");
        circle3.classList.remove("active2");
        circle4.classList.remove("active2");
        circle6.classList.remove("active2");
        circle7.classList.remove("active2");
        circle8.classList.remove("active2");
    } else if(input.value == 100){
        circle6.classList.add("active2");
        circle1.classList.remove("active2");
        circle2.classList.remove("active2");
        circle3.classList.remove("active2");
        circle4.classList.remove("active2");
        circle5.classList.remove("active2");
        circle7.classList.remove("active2");
        circle8.classList.remove("active2");
    } else if(input.value == 50){
        circle7.classList.add("active2");
        circle1.classList.remove("active2");
        circle2.classList.remove("active2");
        circle3.classList.remove("active2");
        circle4.classList.remove("active2");
        circle5.classList.remove("active2");
        circle6.classList.remove("active2");
        circle8.classList.remove("active2");
    } else if(input.value == 25){
        circle8.classList.add("active2");
        circle1.classList.remove("active2");
        circle2.classList.remove("active2");
        circle3.classList.remove("active2");
        circle4.classList.remove("active2");
        circle5.classList.remove("active2");
        circle6.classList.remove("active2");
        circle7.classList.remove("active2");
    } else{
        circle8.classList.remove("active2");
        circle1.classList.remove("active2");
        circle2.classList.remove("active2");
        circle3.classList.remove("active2");
        circle4.classList.remove("active2");
        circle5.classList.remove("active2");
        circle6.classList.remove("active2");
        circle7.classList.remove("active2");
    }
   }, false);


//text.addEventListener('input', e => res.innerHTML = e.target.value);

