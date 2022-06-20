let cookies = document.querySelector('.cookies');
let cookiesBtn = document.querySelector('.cookiesBtn');
cookiesBtn.addEventListener('click', (e) => {
    cookies.classList.add('active');
    e.preventDefault();
})
