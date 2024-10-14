document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menuButton');
    const navMenu = document.getElementById('nav-menu');

    menuButton.addEventListener('click', function() {
        navMenu.classList.toggle('show');
    });

    function checkScreenSize() {
        if (window.innerWidth > 768) {
            navMenu.classList.remove('show');
        }
    }

    window.addEventListener('resize', checkScreenSize);
    checkScreenSize();
});