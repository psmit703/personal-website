let navBar = document.getElementsByClassName("navbar")[0];

let dropdown = document.getElementById("navbar-options");

let prevScrollPos = window.scrollY;

window.onscroll = function () {
    let currentScrollPos = window.scrollY;
    if (prevScrollPos > currentScrollPos) {
        navBar.style.top = "0";
    } else {
        if (dropdown.classList.contains("show") == false) {
            navBar.style.top = "-100px";
        }
    }
    prevScrollPos = currentScrollPos;
}

