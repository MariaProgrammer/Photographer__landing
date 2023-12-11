// Burger
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

burger.addEventListener("click", () => {
    nav.classList.toggle('nav--active');
    burger.classList.toggle('burger--active');
    document.body.classList.toggle("stop-scroll");    
});

// Modal window

const modal = document.querySelector('.modal-parent');
const btn = document.querySelector('.header__btn');

// Modal opened
btn.addEventListener("click", () => {
    modal.classList.add('modal-parent--open');
})

// Modal closed
modal.querySelector(".modal").addEventListener("click", (e) => {
    e._isClick = true;

})

modal.addEventListener("click", (e) => {
    if(e._isClick === true) return;
    modal.classList.remove('modal-parent--open');

})

// Modal closed by ESC

window.addEventListener('keydown', (e) => {
    if(e.key === 'Escape') {
        modal.classList.remove('modal-parent--open');
    }
})

// Gallery on swiper js

const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 20,

    navigation: {
        nextEl: '.latest-shots__btn--right',
        prevEl: '.latest-shots__btn--left',
      },
})

