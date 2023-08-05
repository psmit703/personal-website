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

}

function toLightMode() {

}

darkModeBtn.addEventListener("click", function () {
    if (darkModeOn) {
        toLightMode();
        console.log("light mode")
        darkModeOn = false;
    } else {
        toDarkMode();
        console.log("dark mode")
        darkModeOn = true;
    }
});