let navbar = document.getElementsByClassName("navbar")[0];
let dropdown = document.getElementById("navbar-options");

let prevScrollPos = window.scrollY;

let prevMouseY = undefined;
let mouseY = undefined;
let mouseAtTop = false;

window.onscroll = function () {
    let currentScrollPos = window.scrollY;
    if (prevScrollPos > currentScrollPos) {
        navbar.style.top = "0";
    } else {
        if (dropdown.classList.contains("show") == false && mouseAtTop == false) {
            navbar.style.top = "-100px";
        }
    }
    prevScrollPos = currentScrollPos;
}

window.onmousemove = function (event) {
    let navWidth = document.defaultView.getComputedStyle(navbar).width
    navWidth = navWidth.substring(0, navWidth.length - 2)
    navWidth = parseInt(navWidth)

    if (navWidth >= 768) {
        mouseY = event.clientY
        if (prevMouseY == undefined) {
            prevMouseY = mouseY;
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

        prevMouseY = mouseY;
    }
}
