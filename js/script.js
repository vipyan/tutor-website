//Toggle Mobile menu
document.addEventListener('DOMContentLoaded', function () { 
    const toggleButoon = document.querySelector('.navbar .mobile-menu-toggle');

    const mobileMenu = document.querySelector('.navbar .mobile-menu-items');

    toggleButoon.addEventListener('click', function () {
        mobileMenu.classList.toggle('active'); 
    });
});

//Change navbar brackground on scroll

window.addEventListener('scroll', function () { 
    const navBar = document.querySelector('.navbar');

    if (window.scrollY > 0) {
        navBar.classList.add('navbar-scroll');
    } else {
        navBar.classList.remove('navbar-scroll');
    }
});
