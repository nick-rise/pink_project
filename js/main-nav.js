var nav = document.querySelector('.main-nav');
var toggle = document.querySelector('.toggle_open');

toggle.addEventListener('click', function(event) {
     event.preventDefault();
     nav.classList.add('main-nav_show');
});

var close = document.querySelector('.toggle_close');

close.addEventListener('click', function(event) {
    event.preventDefault();
    nav.classList.remove('main-nav_show');
});

