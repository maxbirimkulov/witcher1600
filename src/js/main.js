// let burger = $('.burger');
// let nav = $('.header__navbar');
//
// burger.on('click', function () {
//     nav.toggleClass('active');
//     burger.toggleClass('active');
// });


let burger = document.querySelector('.burger');
let nav = document.querySelector('.header__navbar');

burger.addEventListener('click', function () {
    burger.classList.toggle('active');
    nav.classList.toggle('active');
});
