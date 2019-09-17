const MOON_THEME_CLASS = 'theme-moon';
const STATES = ['difference', 'hard-light'];

document.addEventListener('DOMContentLoaded', function () {
    const moonSwitchers = Array.from(document.querySelectorAll('.js-moon'));
    const sidebar = document.getElementById('sidebar');
    let currentState = 0;

    function clickHandler() {
        const className = document.body.className;

        if (className.indexOf(MOON_THEME_CLASS) < 0) {
            document.body.className += ' ' + MOON_THEME_CLASS;
        } else if (currentState === STATES.length) {
            document.body.className = className.replace(' ' + MOON_THEME_CLASS, '');
            sidebar.style.backgroundBlendMode = 'normal';
            currentState = 0;
        } else {
            sidebar.style.backgroundBlendMode = STATES[currentState];
            currentState++;
        }
    }

    Array.from(moonSwitchers).forEach(function (el) {
        el.addEventListener('click', clickHandler);
    });
});
