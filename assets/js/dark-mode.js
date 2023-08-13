let darkModeBtn = document.getElementById("btn-circle");
let darkModeBtnWrapper = document.getElementById("dark-mode-btn");
let deleteCookiesWrapper = document.getElementById("delete-cookies-wrapper");
let slider = document.getElementById("btn-circle");
let darkModeOn = false;
let becauseCookie = false;
let animationActive = false;

cookies = document.cookie.split("; ");
for (let i = 0; i < cookies.length; i++) {
    if (cookies[i].split("=")[0] == "darkModeOn") {
        if (cookies[i].split("=")[1] == "true") {
            darkModeOn = true;
            document.cookie = "darkModeOn=true; max-age=" + 30 * 24 * 60 * 60 + "; path=/"
        } else if (cookies[i].split("=")[1] == "false") {
            darkModeOn = false;
            becauseCookie = true;
            document.cookie = "darkModeOn=false; max-age=" + 30 * 24 * 60 * 60 + "; path=/"
        } else {
            console.log("Error: invalid cookie value for darkModeOn in /assets/js/dark-mode.js");
        }
    }
}

// light mode is default
if (darkModeOn || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches && !becauseCookie)) {
    slider.style.marginLeft = "37px"
    toDarkMode();
    darkModeOn = true;
    slider.style.backgroundImage = "url(/assets/images/dark-mode.svg)"
    darkModeBtn.style.backgroundColor = "rgb(136, 136, 136)";
    darkModeBtnWrapper.style.backgroundColor = "rgb(136, 136, 136)";
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

    let anchors = document.getElementsByTagName("a");
    for (let i = 0; i < anchors.length; i++) {
        if (!anchors[i].classList.contains("nav-link") && !anchors[i].classList.contains("navbar-brand")) {
            anchors[i].style.color = "#009dff";
        }
    }

    let deleteCookies = document.getElementById("delete-cookies");
    deleteCookies.style.color = "#009dff";

    if ((window.innerHeight + Math.round(window.scrollY)) >= document.body.offsetHeight) {
        window.scrollTo(0, document.body.scrollHeight);
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

    let anchors = document.getElementsByTagName("a");
    for (let i = 0; i < anchors.length; i++) {
        if (!anchors[i].classList.contains("nav-link") && !anchors[i].classList.contains("navbar-brand")) {
            anchors[i].style.color = "#007bff";
        }
    }

    let deleteCookies = document.getElementById("delete-cookies");
    deleteCookies.style.color = "#007bff";

    if ((window.innerHeight + Math.round(window.scrollY)) >= document.body.offsetHeight) {
        window.scrollTo(0, document.body.scrollHeight);
    }
}

function moveBtn(direction) {
    if (direction == "left") {
        slider.style.animation = "dark-mode-off 0.3s ease-in-out forwards";
        slider.style.backgroundImage = "url(/assets/images/light-mode.svg)"
        darkModeBtnWrapper.style.animation = "dark-mode-wrapper-off 0.3s ease-in-out forwards";
        darkModeBtnWrapper.style.backgroundColor = "lightblue";
    } else if (direction == "right") {
        slider.style.animation = "dark-mode-on 0.3s ease-in-out forwards";
        slider.style.backgroundImage = "url(/assets/images/dark-mode.svg)"
        darkModeBtnWrapper.style.animation = "dark-mode-wrapper-on 0.3s ease-in-out forwards";
        darkModeBtnWrapper.style.backgroundColor = "rgb(136, 136, 136)";
    } else {
        console.log("Error: moveBtn() called with invalid argument in /assets/js/dark-mode.js");
    }
}

darkModeBtnWrapper.addEventListener("click", function () {
    if (darkModeOn) {
        animationActive = true;
        let scrollInit = window.scrollY;
        moveBtn("left")
        document.cookie = "darkModeOn=false; max-age=" + 30 * 24 * 60 * 60 + "; path=/"
        deleteCookiesWrapper.innerHTML = "<span id=\"delete-cookies\">Reset Dark Mode Preference</span>"
        deleteCookies = document.getElementById("delete-cookies");
        toLightMode();
        darkModeOn = false;
        darkModeBtnWrapper.style.opacity = "1"
        darkModeBtnWrapper.style.visibility = "visible"
        let scrollEnd = window.scrollY;

        if (scrollInit == scrollEnd) {
            animationActive = false;
        }

        deleteCookies.addEventListener("click", function () {
            delAllCookies()
        }, { once: true });
    } else {
        animationActive = true;
        let scrollInit = window.scrollY;
        moveBtn("right")
        document.cookie = "darkModeOn=true; max-age=" + 30 * 24 * 60 * 60 + "; path=/"
        deleteCookiesWrapper.innerHTML = "<span id=\"delete-cookies\">Reset Dark Mode Preference</span>"
        deleteCookies = document.getElementById("delete-cookies");
        toDarkMode();
        darkModeOn = true;
        darkModeBtnWrapper.style.opacity = "1"
        darkModeBtnWrapper.style.visibility = "visible"
        let scrollEnd = window.scrollY;

        if (scrollInit == scrollEnd) {
            animationActive = false;
        }

        deleteCookies.addEventListener("click", function () {
            delAllCookies()
        }, { once: true });
    }
});
