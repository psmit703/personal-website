// This script deletes the dark mode cookie if it exists.
// If the user clicks/presses on the "Reset Dark Mode Preference" text at the bottom of any page,
// the dark mode cookie will be deleted and the text will change to "Successfully reset dark mode preference!"
// If no cookie was found, the text will change to "No preference to reset!"
// This will reset the preference sitewide.
// This does not automatically reset light/dark mode to the device preference, however reloading the page will do so.

let deleteCookies = document.getElementById("delete-cookies");
let wrapper = document.getElementById("delete-cookies-wrapper");
let initialText = wrapper.innerHTML;

// displays the appropriate text based on whether or not the cookie was deleted
function displayDeleted(deleted) {
    if (deleted == true) {
        wrapper.innerHTML = "Successfully reset dark mode preference!"
    } else if (deleted == false) {
        wrapper.innerHTML = "No preference to reset!"
    } else {
        wrapper.innerHTML = "An Error Occurred"
        console.log("Error: displayDeleted() called with invalid argument ( " + deleted + " ) in /assets/js/delete-cookies.js");
    }
}

// deletes the dark mode cookie if it exists
// stops iterating through the cookies once the dark mode cookie is found
function delDarkModeCookie() {
    let cookies = document.cookie.split("; ");
    let anyDeleted = false

    if (cookies.length == 1 && cookies[0] == "") {
        // this case intentionally left blank
    } else {
        // iterate through the cookies, deleting the dark mode cookie if it exists
        for (let i = 0; i < cookies.length; i++) {
            let name = cookies[i].split("=")[0];
            if (name == "darkModeOn") {
                document.cookie = name + "=" + "; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";

                anyDeleted = true;
                break;
            }
        }
    }

    // calls displayDeleted() to display the appropriate text
    displayDeleted(anyDeleted);
}

// event listener to detect clicking/pressing the relevant text on the page
// only allows the event listener to be called once
// subsequent calls, if needed, are handled by event listeners in dark-mode.js
deleteCookies.addEventListener("click", function () {
    delDarkModeCookie()
}, { once: true });