let navBtn = document.getElementsByClassName("navbar-toggler")[0];

let toggledOn = false;

navBtn.addEventListener("click", function handleClick() {
    if (!toggledOn) {
        toggledOn = true;
        navBtn.style.animation = "nav-rot-on 0.3s ease-in-out forwards";
    } else {
        toggledOn = false;
        navBtn.style.animation = "nav-rot-off 0.3s ease-in-out forwards";
    }
});
