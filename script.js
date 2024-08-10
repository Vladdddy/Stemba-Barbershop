window.addEventListener('scroll', function () {
    var ids = ['icon1', 'icon2', 'icon3'];

    function toggleVisibility(elementId) {
        var element = document.getElementById(elementId);
        if (element) {
            var position = element.getBoundingClientRect();
            console.log('Element:', elementId, 'Position:', position);
            if (position.top < window.innerHeight && position.bottom > 0) {
                element.classList.add('show');
                console.log('Element shown:', elementId);
            } else {
                element.classList.remove('show');
                console.log('Element hidden:', elementId);
            }
        } else {
            console.warn('Element not found:', elementId);
        }
    }

    ids.forEach(toggleVisibility);
});
window.dispatchEvent(new Event('scroll'));