// This script handles dark mode functionality.
// It starts by checking if the user has a dark mode cookie.
// If not, it checks if the user's device is set to dark mode.
// If there is a cookie, that overrides device preference. If there is no cookie, device preference is used.

let darkModeBtn = document.getElementById("btn-circle");
let darkModeBtnWrapper = document.getElementById("dark-mode-btn");
let deleteCookiesWrapper = document.getElementById("delete-cookies-wrapper");
let slider = document.getElementById("btn-circle");
let darkModeOn = false;
let becauseCookie = false;
let animationActive = false;

// this function is called when the GitHub API data for the changelog page is loaded
function callback(mutations, observer) {
    if (darkModeOn || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches && !becauseCookie)) {
        toDarkMode();
    }

    observer.disconnect();
}

// checks if the user is on the changelog page
// if so, supports dark mode preference for data received from the GitHub API
// this data may be received after the rest of this script has already run, making this necessary
let url = window.location.href;
if (url.includes("changelog.html")) {
    let observer = new MutationObserver(callback)
    let targetNode = document.getElementById("changelog-body");
    let observerOptions = {
        childList: true
    }

    observer.observe(targetNode, observerOptions);
}

// checks if the user has a dark mode cookie
cookies = document.cookie.split("; ");
for (let i = 0; i < cookies.length; i++) {
    if (cookies[i].split("=")[0] == "darkModeOn") {
        if (cookies[i].split("=")[1] == "true") {
            // dark mode is on
            // update the cookie to expire in 30 days from the current date
            darkModeOn = true;
            document.cookie = "darkModeOn=true; max-age=" + 30 * 24 * 60 * 60 + "; path=/"
        } else if (cookies[i].split("=")[1] == "false") {
            // dark mode is off
            // update the cookie to expire in 30 days from the current date
            darkModeOn = false;
            becauseCookie = true;
            document.cookie = "darkModeOn=false; max-age=" + 30 * 24 * 60 * 60 + "; path=/"
        } else {
            console.log("Error: invalid cookie value for darkModeOn in /assets/js/dark-mode.js");
        }
    }
}

// light mode is default
// if the dark mode cookie exists and is true, or if the user's device is set to dark mode and the
// dark mode cookie does not exist, dark mode will be enabled
if (darkModeOn || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches && !becauseCookie)) {
    // instantly moves the button to the right so that no animation is visible
    // calls toDarkMode() to update the rest of the page
    slider.style.marginLeft = "37px"
    toDarkMode();
    darkModeOn = true;
    slider.style.backgroundImage = "url(/assets/images/dark-mode.svg)"
    darkModeBtn.style.backgroundColor = "rgb(136, 136, 136)";
    darkModeBtnWrapper.style.backgroundColor = "rgb(136, 136, 136)";
} else {
    slider.style.backgroundImage = "url(/assets/images/light-mode.svg)"
}

// called when dark mode is enabled
// dark mode is sometimes done by adding a class to the body, however there is a lot going on in this site,
// much of which requires JavaScript, (especially with respect to Bootstrap) and it is easier to just
// manually change the relevant properties through JS
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
        langSVGs[i].style.objectFit = "contain";
        langSVGs[i].style.backgroundColor = "#888888";
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
            if (!anchors[i].classList.contains("card-link") && !anchors[i].classList.contains("user-link")) {
                anchors[i].style.color = "#009dff";
            } else if (anchors[i].classList.contains("user-link")) {
                anchors[i].style.color = "rgb(0, 86, 179)";
            }
        }
    }

    let deleteCookies = document.getElementById("delete-cookies");
    deleteCookies.style.color = "#009dff";

    if ((window.innerHeight + Math.round(window.scrollY)) >= document.body.offsetHeight) {
        window.scrollTo(0, document.body.scrollHeight);
    }

    let card = document.getElementsByClassName("card");
    for (let i = 0; i < card.length; i++) {
        card[i].style.backgroundColor = "rgb(136, 136, 136)";
        card[i].style.color = "rgb(248, 249, 250)";
    }

    darkModeBtn.style.backgroundPosition = "35% 65%";
}

// called when light mode is enabled
// same idea as toDarkMode(), but for light mode instead of dark mode
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
        langSVGs[i].style.objectFit = "contain";
        langSVGs[i].style.backgroundColor = "transparent";
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
            if (!anchors[i].classList.contains("card-link") && !anchors[i].classList.contains("user-link")) {
                anchors[i].style.color = "#007bff";
            } else if (anchors[i].classList.contains("user-link")) {
                anchors[i].style.color = "rgb(0, 123, 255)";
            }
        }
    }

    let deleteCookies = document.getElementById("delete-cookies");
    deleteCookies.style.color = "#007bff";

    if ((window.innerHeight + Math.round(window.scrollY)) >= document.body.offsetHeight) {
        window.scrollTo(0, document.body.scrollHeight);
    }

    let changelogs = document.getElementsByClassName("card");
    for (let i = 0; i < changelogs.length; i++) {
        changelogs[i].style.backgroundColor = "rgb(255, 255, 255)";
        changelogs[i].style.color = "rgb(33, 37, 41)";
    }

    darkModeBtn.style.backgroundPosition = "center";

}

// animations to move the button when it is clicked
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

// event listener to detect clicking/pressing the dark mode button
// allows for users to change light/dark mode without reloading the page
// updates cookie to expire 30 days from the current date
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

        // animationActive is used as a semaphore (also used in navbar-scroll.js)
        // this prevents the page from moving vertically when the button is clicked due to the prog. lang. SVGs changing size
        // in turn, this prevents the behaviors in navbar-scroll.js from being triggered unintentionally
        if (scrollInit == scrollEnd) {
            animationActive = false;
        }

        // re-establishes an event listener to detect clicking/pressing the option to remove dark mode preference
        deleteCookies.addEventListener("click", function () {
            delDarkModeCookie()
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

        // animationActive is used as a semaphore (also used in navbar-scroll.js)
        // this prevents the page from moving vertically when the button is clicked due to the prog. lang. SVGs changing size
        // in turn, this prevents the behaviors in navbar-scroll.js from being triggered unintentionally
        if (scrollInit == scrollEnd) {
            animationActive = false;
        }

        // re-establishes an event listener to detect clicking/pressing the option to remove dark mode preference
        deleteCookies.addEventListener("click", function () {
            delDarkModeCookie()
        }, { once: true });
    }
});
