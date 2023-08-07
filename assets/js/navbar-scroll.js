let navbar = document.getElementsByClassName("navbar")[0];
let dropdown = document.getElementById("navbar-options");
let darkModeWrapper = document.getElementById("dark-mode-btn");
let darkModeWrapperVisible = true;

let viewportWidth = document.documentElement.clientWidth
let navWidth = document.defaultView.getComputedStyle(navbar).width

let prevScrollPos = window.scrollY;

let prevMouseY = undefined;
let prevMouseX = undefined;
let mouseY = undefined;
let mouseX = undefined;
let mouseAtTop = false;

window.onscroll = function () {
    if (animationActive == false) {
        let currentScrollPos = window.scrollY;
        let navWidth = document.defaultView.getComputedStyle(navbar).width
        navWidth = navWidth.substring(0, navWidth.length - 2)
        navWidth = parseInt(navWidth)


        if (prevScrollPos > currentScrollPos) {
            navbar.style.top = "0";
            if (window.scrollY == 0 || navWidth < 768) {
                darkModeWrapper.style.animation = "dark-mode-scroll-visible 0.3s ease-in-out forwards";
                darkModeWrapperVisible = true;
            }
        } else {
            if (dropdown.classList.contains("show") == false && mouseAtTop == false) {
                navbar.style.top = "-100px";

                if (mouseX > viewportWidth * 0.15 || navWidth < 768) {
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

window.onmousemove = function (event) {
    if (animationActive == false) {
        navWidth = navWidth.substring(0, navWidth.length - 2)
        navWidth = parseInt(navWidth)

        if (navWidth >= 768) {
            mouseY = event.clientY
            mouseX = event.clientX

            if (prevMouseY == undefined) {
                prevMouseY = mouseY;
            }
            if (prevMouseX == undefined) {
                prevMouseX = mouseX;
            }

            if (mouseY <= 124) {
                mouseAtTop = true;
            } else {
                mouseAtTop = false;
            }

            if (mouseAtTop || prevScrollPos == 0 || dropdown.classList.contains("show")
                || dropdown.classList.contains("collapsing")) {
                navbar.style.top = "0";
            } else if (mouseY > prevMouseY) {
                navbar.style.top = "-100px";
            }



            if (mouseX <= viewportWidth * 0.15 && darkModeWrapperVisible == false) {
                darkModeWrapper.style.animation = "dark-mode-scroll-visible 0.3s ease-in-out forwards";
                darkModeWrapperVisible = true;

            } else if (mouseX > viewportWidth * 0.15 && mouseX > prevMouseX && window.scrollY > 0) {
                darkModeWrapper.style.animation = "dark-mode-scroll-hidden 0.3s ease-in-out forwards";
                darkModeWrapperVisible = false;
            }
        }


        prevMouseY = mouseY;
        prevMouseX = mouseX;
    } else {

    }
}
