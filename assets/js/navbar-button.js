let navBtn = document.getElementsByClassName("navbar-toggler")[0];

navBtn.addEventListener("click", function handleClick() {
    if (!toggledOn) {
        navBtn.style.animation = "nav-rot-on 0.3s ease-in-out forwards";
    } else {
        navBtn.style.animation = "nav-rot-off 0.3s ease-in-out forwards";
    }
});
