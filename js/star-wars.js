// elements
animated_elements = '.stars, #start, h1, #titles, #titlecontent';
intro = document.getElementsByTagName('audio')[0];
paused = true;
timer = false;

// when music stops, go to slides
$('audio').on('ended', function() {
    window.location = './slides.html';
});

// start/stop on spacebar
$(document).on("keyup", function(e) {
    if (e.which == 32) {
        if (paused) {
            $(animated_elements).css('animation-play-state', 'running');
            intro.play();
            paused = false;
        } else {
            $(animated_elements).css('animation-play-state', 'paused');
            intro.pause();
            paused = true;
        }
    }
});