darkModeBtn = document.getElementById("dark-mode-btn");
darkModeOn = false;

// if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
// just using true for testing purposes
// will change condition when completed and/or as needed
// light mode is default

if (true) {
    toDarkMode();
    // change icon without animation
    darkModeOn = true;
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
}

darkModeBtn.addEventListener("click", function () {
    if (darkModeOn) {
        toLightMode();
        darkModeOn = false;
        document.cookie = "darkModeOn=false";
    } else {
        toDarkMode();
        darkModeOn = true;
        document.cookie = "darkModeOn=true";
    }
});
