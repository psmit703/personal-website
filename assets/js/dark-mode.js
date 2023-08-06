darkModeBtn = document.getElementById("btn-circle");
slider = document.getElementById("btn-circle");
darkModeOn = false;

cookies = document.cookie.split("; ");
for (let i = 0; i < cookies.length; i++) {
    if (cookies[i].split("=")[0] == "darkModeOn") {
        if (cookies[i].split("=")[1] == "true") {
            darkModeOn = true;
            document.cookie = "darkModeOn=true; max-age" + 30 * 24 * 60 * 60 + "; path=/"
        } else if (cookies[i].split("=")[1] == "false") {
            darkModeOn = false;
            document.cookie = "darkModeOn=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/"
        } else {
            console.log("Error: invalid cookie value for darkModeOn in /assets/js/dark-mode.js");
        }
    }
}

// light mode is default
if ((window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) || darkModeOn) {
    slider.style.marginLeft = "37px"
    toDarkMode();
    darkModeOn = true;
    slider.style.backgroundImage = "url(/assets/images/dark-mode.svg)"

    // update expiration date for cookie
} else {
    slider.style.backgroundImage = "url(/assets/images/light-mode.svg)"
}

function toDarkMode() {
    navbar = document.getElementById("navbar");
    navbar.classList.remove("navbar-light");
    navbar.classList.remove("bg-light");
    navbar.classList.add("navbar-dark");
    navbar.classList.add("bg-dark");

    document.body.classList.add("bg-dark");
    document.body.classList.add("text-light");

    document.getElementById("footer").classList.remove("text-muted");
    document.getElementById("footer").classList.add("text-light");

    let langSVGs = document.getElementsByClassName("langSVG");
    for (let i = 0; i < langSVGs.length; i++) {
        langSVGs[i].height = "90";
        langSVGs[i].width = "90";
        langSVGs[i].style.objectFit = "contain";
        langSVGs[i].style.backgroundColor = "#888888";
        langSVGs[i].style.padding = "10px";
        langSVGs[i].style.borderRadius = "10px";
    }

    let contactSVGs = document.getElementsByClassName("contactSVG");
    for (let i = 0; i < contactSVGs.length; i++) {
        contactSVGs[i].style.color = "rgb(248, 249, 250)";
    }

    let dividers = document.getElementsByTagName("hr");
    for (let i = 0; i < dividers.length; i++) {
        dividers[i].style.borderColor = "#888888"
    }
}

function toLightMode() {
    navbar = document.getElementById("navbar");
    navbar.classList.remove("navbar-dark");
    navbar.classList.remove("bg-dark");
    navbar.classList.add("navbar-light");
    navbar.classList.add("bg-light");

    document.body.classList.remove("bg-dark");
    document.body.classList.remove("text-light");

    document.getElementById("footer").classList.remove("text-light");
    document.getElementById("footer").classList.add("text-muted");

    let langSVGs = document.getElementsByClassName("langSVG");
    for (let i = 0; i < langSVGs.length; i++) {
        langSVGs[i].height = "70";
        langSVGs[i].width = "70";
        langSVGs[i].style.objectFit = "contain";
        langSVGs[i].style.backgroundColor = "transparent";
        langSVGs[i].style.padding = "0";
        langSVGs[i].style.borderRadius = "0";
    }

    let contactSVGs = document.getElementsByClassName("contactSVG");
    for (let i = 0; i < contactSVGs.length; i++) {
        contactSVGs[i].style.color = "black";
    }

    let dividers = document.getElementsByTagName("hr");
    for (let i = 0; i < dividers.length; i++) {
        dividers[i].style.borderColor = "rgba(0, 0, 0, 0.1)"
    }
}

function moveBtn(direction) {
    if (direction == "left") {
        slider.style.animation = "dark-mode-off 0.3s ease-in-out forwards";
        slider.style.backgroundImage = "url(/assets/images/light-mode.svg)"
    } else if (direction == "right") {
        slider.style.animation = "dark-mode-on 0.3s ease-in-out forwards";
        slider.style.backgroundImage = "url(/assets/images/dark-mode.svg)"
    } else {
        console.log("Error: moveBtn() called with invalid argument in /assets/js/dark-mode.js");
    }
}

darkModeBtn.addEventListener("click", function () {
    if (darkModeOn) {
        moveBtn("left")
        toLightMode();
        darkModeOn = false;
        document.cookie = "darkModeOn=false";
        document.cookie = "darkModeOn=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/"
    } else {
        moveBtn("right")
        toDarkMode();
        darkModeOn = true;
        document.cookie = "darkModeOn=true";
        document.cookie = "darkModeOn=true; max-age" + 30 * 24 * 60 * 60 + "; path=/"

    }
});
