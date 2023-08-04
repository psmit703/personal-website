let navBtn = document.getElementsByClassName("navbar-toggler")[0];
let dropdownLinks = document.getElementsByClassName("nav-link");
let ddLinkWidths = [];
for (let i = 0; i < dropdownLinks.length; i++) {
    ddLinkWidths.push(dropdownLinks[i].style.width);
}

let toggledOn = false;

navBtn.addEventListener("click", function handleClick() {
    if (!toggledOn) {
        toggledOn = true;
        navBtn.style.animation = "nav-rot-on 0.3s ease-in-out forwards";
        for (let i = 0; i < dropdownLinks.length; i++) {
            dropdownLinks[i].style.width = "100%";
        }
    } else {
        toggledOn = false;
        navBtn.style.animation = "nav-rot-off 0.3s ease-in-out forwards";
        for (let i = 0; i < dropdownLinks.length; i++) {
            dropdownLinks[i].style.width = ddLinkWidths[i];
        }
    }
});
