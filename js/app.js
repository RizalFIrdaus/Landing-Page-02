// Burger menu
$(document).ready(function () {
    $('.burger-menu').click(function () {
        $('.responsive-nav').toggleClass('dropdown');
    })

    // scroll reveal
})
ScrollReveal().reveal('#features .car', {
    duration: 3000,
    origin: 'left',
    distance: '30px'
});
ScrollReveal().reveal('#features .shoe', {
    duration: 3000,
    origin: 'bottom',
    distance: '30px'
});
ScrollReveal().reveal('#features .phone', {
    duration: 3000,
    origin: 'right',
    distance: '30px'
});
ScrollReveal().reveal('#header .content img', {
    duration: 1000,
    origin: 'bottom',
    distance: '300px'
});
ScrollReveal().reveal('#header .content h1', {
    duration: 1000,
    origin: 'top',
    distance: '100px'
});
ScrollReveal().reveal('#header .content p', {
    duration: 1000,
    origin: 'left',
    distance: '10px'
});
ScrollReveal().reveal('#discount .main-discount img', {
    duration: 1000,
    origin: 'left',
    distance: '5000px',
    delay: 700
});

// parallax
$(window).scroll(function () {
    let parallax = $(window).scrollTop();
    $('#header').css('background-position-y', 'center ' + (parallax * 0.25) + 'px!important');
})