adjustNavItems()

addEventListener("resize", (event) => {
    adjustNavItems()
});

function adjustNavItems() {
    let navWidth = document.defaultView.getComputedStyle(navbar).width
    let navItems = document.getElementsByClassName("nav-link")
    navWidth = navWidth.substring(0, navWidth.length - 2)
    navWidth = parseInt(navWidth)

    if (navWidth < 768) {
        for (let i = 0; i < navItems.length; i++) {
            navItems[i].classList.remove("text-center")
        }
    } else {
        for (let i = 0; i < navItems.length; i++) {
            navItems[i].classList.add("text-center")
        }
    }
}