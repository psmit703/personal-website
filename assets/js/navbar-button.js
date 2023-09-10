// This script rotates the navbar button seen in the mobile format.
// When the navbar is collapsing, the button rotates 90 degrees counter-clockwise.
// When the navbar is expanding, the button rotates 90 degrees clockwise.
// This script also handles collapsing the navbar menu when the user clicks/presses outside of the navbar.

let navBtn = document.getElementsByClassName("navbar-toggler")[0];
let dropdownLinks = document.getElementsByClassName("nav-link");
let navBar = document.getElementById("navbar");
let ddLinkWidths = [];

// gets the width of each dropdown link
// used to reset the width of the dropdown links when the navbar is collapsed
for (let i = 0; i < dropdownLinks.length; i++) {
    ddLinkWidths.push(dropdownLinks[i].style.width);
}

let toggledOn = false;

// event listener to detect clicking/pressing the navbar button
navBtn.addEventListener("click", function handleClick() {
    if (!toggledOn) {
        // rotates the navbar button clockwise when expanding the navbar menu

        toggledOn = true;
        navBtn.style.animation = "nav-rot-on 0.3s ease-in-out forwards";
        for (let i = 0; i < dropdownLinks.length; i++) {
            dropdownLinks[i].style.width = "100%";
        }
    } else {
        // rotates the navbar button counter-clockwise when collapsing the navbar menu

        toggledOn = false;
        navBtn.style.animation = "nav-rot-off 0.3s ease-in-out forwards";
        for (let i = 0; i < dropdownLinks.length; i++) {
            dropdownLinks[i].style.width = ddLinkWidths[i];
        }
    }
});

// event listener to detect clicking/pressing outside of the navbar
document.addEventListener("click", function handleClick(clickPos) {
    let yPos = clickPos.clientY;
    let xPos = clickPos.clientX;
    let darkModeBtnRect = darkModeBtnWrapper.getBoundingClientRect();
    let insideRect = false;

    // checks if the user clicked/pressed inside the dark mode button
    if (yPos >= darkModeBtnRect.top && yPos <= darkModeBtnRect.bottom && xPos >= darkModeBtnRect.left && xPos <= darkModeBtnRect.right) {
        insideRect = true;
    }

    let navHeight = navBar.offsetHeight + parseInt(getComputedStyle(navBar).marginBottom);

    // collapses the navbar menu if the user clicks/presses outside of the navbar
    if (yPos > navHeight && toggledOn && !insideRect) {
        navBtn.click();
    }
});