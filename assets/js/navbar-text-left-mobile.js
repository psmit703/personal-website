// This script determines whether or not the navbar items should be centered or left-aligned.
// On mobile devices, the navbar items are left-aligned.
// On desktop devices, the navbar items are centered.
// This is to make a very subtle difference in the way the current page selection looks on the navbar.
// When bolded, the centered text looks better than the left-aligned text as it expands to the left and the right, instead of just the right.
// On mobile devices, centered text makes it centered relative to the screen, so this script avoids doing that.
// This is a very minor detail, but it is one that I noticed and wanted to fix.
// This is responsive, so if the user resizes their screen, the navbar items will be adjusted accordingly.

function adjustNavItems() {
    let navWidth = document.defaultView.getComputedStyle(navbar).width
    let navItems = document.getElementsByClassName("nav-link")
    navWidth = navWidth.substring(0, navWidth.length - 2)
    navWidth = parseInt(navWidth)

    // adjusts the navbar items to be centered or left-aligned depending on the screen width
    if (navWidth < 992) {
        for (let i = 0; i < navItems.length; i++) {
            navItems[i].classList.remove("text-center")
        }
    } else {
        for (let i = 0; i < navItems.length; i++) {
            navItems[i].classList.add("text-center")
        }
    }
}

// initial call when the page is loaded
adjustNavItems()

// event listener to support responsiveness
addEventListener("resize", (event) => {
    adjustNavItems()
});

