window.addEventListener('scroll', function () {
    var ids = ['icon1', 'icon2', 'icon3',
        'imagelocale'];
    var delay = 150;

    function toggleVisibility(elementId) {
        var element = document.getElementById(elementId);
        if (element) {
            var position = element.getBoundingClientRect();
            console.log('Element:', elementId, 'Position:', position);
            if (position.top < window.innerHeight && position.bottom > 0) {
                setTimeout(function () {
                    element.classList.add('show');
                    console.log('Element shown:', elementId);
                }, delay);
            } else {
                setTimeout(function () {
                    element.classList.remove('show');
                    console.log('Element hidden:', elementId);
                }, delay);
            }
        } else {
            console.warn('Element not found:', elementId);
        }
    }

    ids.forEach(toggleVisibility);
});

window.dispatchEvent(new Event('scroll'));
