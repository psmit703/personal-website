let navBar = document.getElementsByClassName("navbar")[0];
let dropdown = document.getElementById("navbar-options");

let prevScrollPos = window.scrollY;

let prevMouseY = undefined;
let mouseY = undefined;
let mouseAtTop = false;

window.onscroll = function () {
    let currentScrollPos = window.scrollY;
    if (prevScrollPos > currentScrollPos) {
        navBar.style.top = "0";
    } else {
        if (dropdown.classList.contains("show") == false && mouseAtTop == false) {
            navBar.style.top = "-100px";
        }
    }
    prevScrollPos = currentScrollPos;
}

window.onmousemove = function (event) {
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
        navBar.style.top = "0";
    } else if (mouseY > prevMouseY) {
        navBar.style.top = "-100px";
    }

    prevMouseY = mouseY;
}