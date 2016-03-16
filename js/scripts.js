(function() {
    // Hide chevron
    var windowHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    var chevron = document.getElementById('header-chevron');

    if (windowHeight > 750) {
        chevron.style.display =  'none';
    }

    // Scroll to Schedule section
    var scheduleButton = document.getElementById('btn-schedule');
    var scheduleSection = document.getElementById('schedule');

    scheduleButton.addEventListener('click', function(e) {
        e.preventDefault();
        document.body.scrollTop = scheduleSection.offsetTop;
    });
})();
