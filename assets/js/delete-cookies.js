let deleteCookies = document.getElementById("delete-cookies");
let wrapper = document.getElementById("delete-cookies-wrapper");
let initialText = wrapper.innerHTML;

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

function delDarkModeCookie() {
    let cookies = document.cookie.split("; ");
    let anyDeleted = false

    if (cookies.length == 1 && cookies[0] == "") {
    } else {
        for (let i = 0; i < cookies.length; i++) {
            let name = cookies[i].split("=")[0];
            if (name == "darkModeOn") {
                document.cookie = name + "=" + "; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";

                anyDeleted = true;
                break;
            }
        }
    }

    displayDeleted(anyDeleted);
}

deleteCookies.addEventListener("click", function () {
    delDarkModeCookie()
}, { once: true });