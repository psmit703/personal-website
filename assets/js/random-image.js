viewWidth = window.innerWidth;
viewHeight = window.innerHeight;

if (viewWidth / viewHeight < 1000 / 720) {
    document.getElementById("img-parent").remove();
} else {
    console.log()

    rand = Math.floor(Math.random() * 5) + 1;

    pictDir = "/assets/images/random-image/image" + rand + ".jpg";


    if (rand == 1) {
        altText = "A headshot of me"
    } else if (rand == 2) {
        altText = "Me standing next to a sign that says \"Freistaat Bayern\"(German for \"Free State of Bavaria\") on top of the Zugspitze"
    } else if (rand == 3) {
        altText = "A picture of me after my high school graduation"
    } else if (rand == 4) {
        altText = "Me standing outside of the Clarice Smith Performing Arts Center after my final trumpet jury"
    } else {
        altText = "Me standing with the Baltimore Orioles' mascot during a postseason game"
    }

    ele = document.getElementById('random-image');
    ele.src = pictDir;
    ele.alt = altText;
}