// fullscreen.js
function openFullscreen() {
    const elem = document.documentElement;
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { // Firefox
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { // Chrome, Safari and Opera
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { // IE/Edge
        elem.msRequestFullscreen();
    }
}

function closeFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { // Firefox
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { // Chrome, Safari and Opera
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { // IE/Edge
        document.msExitFullscreen();
    }
}

window.onclick = function() {
    if (!document.fullscreenElement) {
        openFullscreen();
        sessionStorage.setItem('fullscreen', 'true');
    }
};

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeFullscreen();
        sessionStorage.setItem('fullscreen', 'false');
    }
});

window.onload = function() {
    if (sessionStorage.getItem('fullscreen') === 'true') {
        openFullscreen();
    }
};
