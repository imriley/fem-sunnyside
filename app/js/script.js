const hamburger = document.querySelector('#hamburger');
const hamburger_menu = document.querySelector('.header__menu');

hamburger.addEventListener('click', function() {
    if(hamburger_menu.classList.contains('unhidden')) {
        hamburger_menu.classList.remove('unhidden');
        hamburger_menu.classList.add('hidden');

    }
    else {
        hamburger_menu.classList.add('unhidden');
        hamburger_menu.classList.remove('hidden');
    }
})