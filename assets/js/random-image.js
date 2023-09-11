// This script chooses a random image to be displayed on the home page.
// No image will be selected or fetched if the user's screen is too narrow to display it properly.
// It supports responsiveness, so if the user resizes their screen to be too narrow, the image will be removed.
// Similarly, if the user resizes their screen to be wide enough, the image will be added.
// If an image has already been selected, it will not be changed when the user resizes their screen unless the page is reloaded.

let imgWrapper = document.getElementById("img-parent");
let imgDiv = document.getElementById('random-image');
let viewWidth = window.innerWidth;
let viewHeight = window.innerHeight;

function setPicture(elmt) {
    rand = Math.floor(Math.random() * 5) + 1;

    pictDir = "/assets/images/random-image/image" + rand + ".jpg";

    if (rand == 1) {
        altText = "My professional headshot"
    } else if (rand == 2) {
        altText = "Me standing next to a sign that says \"Freistaat Bayern\" (German for \"Free State of Bavaria\") on top of the Zugspitze"
    } else if (rand == 3) {
        altText = "Me after my high school graduation"
    } else if (rand == 4) {
        altText = "Me standing outside of the Clarice Smith Performing Arts Center after my final trumpet jury"
    } else {
        altText = "Me standing with the Baltimore Orioles' mascot during a postseason game"
    }

    elmt.src = pictDir;
    elmt.alt = altText;
}

// for initial page load, same behavior as with the internal code of the event listener
if (viewWidth / viewHeight < 1000 / 720) {
    imgWrapper.style.opacity = "0";
    imgWrapper.style.visibility = "0";
    imgWrapper.style.display = "none";
} else {
    setPicture(imgDiv);
}

// event listener to support responsiveness
addEventListener("resize", (event) => {
    viewWidth = window.innerWidth;
    viewHeight = window.innerHeight;

    if (viewWidth / viewHeight < 1000 / 720) {
        // visually remove the image if the screen is too narrow
        imgWrapper.style.opacity = "0";
        imgWrapper.style.visibility = "0";
        imgWrapper.style.display = "none";
    } else {
        if (imgDiv.src == "") {
            // if the image has not been selected yet, select it
            setPicture(imgDiv);
        }

        // visually add the image if the screen is wide enough
        imgWrapper.style.opacity = "1";
        imgWrapper.style.visibility = "1";
        imgWrapper.style.display = "block";
    }
});
