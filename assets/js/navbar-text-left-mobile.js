let navWidth = document.defaultView.getComputedStyle(navbar).width
navWidth = navWidth.substring(0, navWidth.length - 2)
navWidth = parseInt(navWidth)

if (navWidth < 768) {
    let navItems = document.getElementsByClassName("nav-link")

    for (let i = 0; i < navItems.length; i++) {
        navItems[i].classList.remove("text-center")
    }
}