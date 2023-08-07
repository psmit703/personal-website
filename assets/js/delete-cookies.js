let deleteCookies = document.getElementById("delete-cookies");
let wrapper = document.getElementById("delete-cookies-wrapper");
let initialText = wrapper.innerHTML;

function displayDeleted(deleted) {
    if (deleted == true) {
        wrapper.innerHTML = "All Cookies Successfully Deleted!"
    } else if (deleted == false) {
        wrapper.innerHTML = "No Cookies Found!"
    } else {
        wrapper.innerHTML = "An Error Occurred!"
    }
}

wrapper.addEventListener("click", function () {
    let cookies = document.cookie.split("; ");
    let anyDeleted = false

    if (cookies.length == 1 && cookies[0] == "") {
    } else {
        for (let i = 0; i < cookies.length; i++) {
            let name = cookies[i].split("=")[0];
            document.cookie = name + "=" + "; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";

            anyDeleted = true;
        }
    }

    displayDeleted(anyDeleted);
});