// This script handles the navbar scrolling animation.
// When the user scrolls down, the navbar and dark mode button will both disappear.
// When the user scrolls up, the navbar and dark mode button will both reappear.
// If the dark mode button is visible and the user is not at the top of the page,
// then it will disappear if the user moves their mouse to the right.
// Similarly, it will reappear if the user moves their mouse far enough to the left.
// Like with the dark mode button, if the navbar is visible and the user is not at the top of the page,
// then it will disappear if the user moves their mouse down.
// It will also reappear if the user moves their mouse far enough up.

let navbar = document.getElementsByClassName("navbar")[0];
let dropdown = document.getElementById("navbar-options");
let darkModeWrapper = document.getElementById("dark-mode-btn");
let darkModeWrapperVisible = true;

let viewportWidth = document.documentElement.clientWidth

let prevScrollPos = window.scrollY;

let prevMouseY = undefined;
let prevMouseX = undefined;
let mouseY = undefined;
let mouseX = undefined;
let mouseAtTop = false;

// handles scrolling-related behaviors
window.onscroll = function () {
    // uses animationActive as a semaphore (also used in dark-mode.js)
    if (animationActive == false) {
        let currentScrollPos = window.scrollY;
        let navWidth = document.defaultView.getComputedStyle(navbar).width
        navWidth = navWidth.substring(0, navWidth.length - 2)
        navWidth = parseInt(navWidth)

        if (prevScrollPos > currentScrollPos) {
            // makes the navbar and dark mode button visible if the user scrolls up
            navbar.style.top = "0";
            darkModeWrapper.style.animation = "dark-mode-scroll-visible 0.3s ease-in-out forwards";
            darkModeWrapperVisible = true;
        } else {
            // makes the navbar and dark mode button invisible if the user scrolls down
            // navbar does not disappear happen if navbar dropdown menu is open or if the user's mouse is in the top 127px of the page
            // dark mode button does not disappear if the user's mouse is in the left 15% of the page
            // dark mode button will disappear if the user's mouse is in the left 15% of the page and the page is viewed in mobile format (this override the previous comment)
            if (dropdown.classList.contains("show") == false && mouseAtTop == false) {
                navbar.style.top = "-100px";

                if (mouseX > viewportWidth * 0.15 || navWidth < 992) {
                    darkModeWrapper.style.animation = "dark-mode-scroll-hidden 0.3s ease-in-out forwards";
                    darkModeWrapperVisible = false;
                }
            }
        }
        prevScrollPos = currentScrollPos;
    } else {
        animationActive = false;
    }
}

// handles mouse movement-related behaviors
// only makes changes if the user is not viewing the site in mobile format
window.onmousemove = function (event) {
    // uses animationActive as a semaphore (also used in dark-mode.js)
    if (animationActive == false) {
        let navWidth = document.defaultView.getComputedStyle(navbar).width

        navWidth = navWidth.substring(0, navWidth.length - 2)
        navWidth = parseInt(navWidth)

        if (navWidth >= 992) {
            mouseY = event.clientY
            mouseX = event.clientX

            if (prevMouseY == undefined) {
                prevMouseY = mouseY;
            }
            if (prevMouseX == undefined) {
                prevMouseX = mouseX;
            }

            if (mouseY <= 127) {
                mouseAtTop = true;
            } else {
                mouseAtTop = false;
            }

            if (mouseAtTop || prevScrollPos == 0 || dropdown.classList.contains("show")
                || dropdown.classList.contains("collapsing")) {
                // makes the navbar visible if the user moves their mouse to the top 127px of the page or
                // if the user is already scrolled to the top of the page or if the navbar dropdown menu is open

                navbar.style.top = "0";
            } else if (mouseY > prevMouseY) {
                // makes the navbar invisible if the user moves their mouse down and none of the above conditions are true

                navbar.style.top = "-100px";
            }

            if (mouseX <= viewportWidth * 0.15 && darkModeWrapperVisible == false) {
                // makes the dark mode button visible if the user moves their mouse to the left 15% of the page and
                // if the dark mode button is not already visible

                darkModeWrapper.style.animation = "dark-mode-scroll-visible 0.3s ease-in-out forwards";
                darkModeWrapperVisible = true;
            } else if (mouseX > viewportWidth * 0.15 && mouseX > prevMouseX && window.scrollY > 0) {
                // makes the dark mode button invisible if the user moves their mouse to the right and
                // it is not in the left 15% of the page and if the user is not scrolled to the top of the page

                darkModeWrapper.style.animation = "dark-mode-scroll-hidden 0.3s ease-in-out forwards";
                darkModeWrapperVisible = false;
            }
        }

        prevMouseY = mouseY;
        prevMouseX = mouseX;
    } else {
        // this case intentionally left blank
    }
}
