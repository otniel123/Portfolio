const styleSwitcherToggle = document.querySelector('.style-switcher-toggler');
styleSwitcherToggle.addEventListener('click', () => {
    document.querySelector('.style-switcher').classList.toggle('open');
});

window.addEventListener('scroll', () => {
    if (document.querySelector('.style-switcher').classList.contains('open')) {
        document.querySelector('.style-switcher').classList.remove('open');
    }
});

const alternateStyles = document.querySelectorAll('.alternate-style');
function setActiveStyle(color) {
    alternateStyles.forEach((style) => {
        if (color === style.getAttribute('title')) {
            style.removeAttribute('disabled');
        } else {
            style.setAttribute('disabled', 'true');
        }
    });
}

const dayNigth = document.querySelector('.day-nigth');
dayNigth.addEventListener('click', () => {
    dayNigth.querySelector('i').classList.toggle('fa-sun');
    dayNigth.querySelector('i').classList.toggle('fa-moon');
    document.body.classList.toggle('dark');
});
window.addEventListener('load', () => {
    if (document.body.classList.contais('dark')) {
        dayNigth.querySelector('i').classList.add('fa-sun');
    } else {
        dayNigth.querySelector('i').classList.add('fa-moon');
    }
});
