'use strict';

window.onload = function () {
    // Moon style toggler
    var MOON_THEME_CLASS = 'theme-moon',
        STATES = ['difference', 'hard-light'];
    var moonSwitchers = document.getElementsByClassName('js-moon'),
        currentState = 0,
        sidebar = document.getElementById('sidebar');
    Array.from(moonSwitchers).forEach(function (el) {
        el.onclick = function () {
            var className = document.body.className;

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
        };
    });
};
