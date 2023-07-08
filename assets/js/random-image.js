$.getJSON('/assets/images/random-image', imgs => {
    console.log(imgs);

    rand = Math.floor(Math.random() * imgs.length);
    pictDir = "/assets/images/random-image/" + imgs[rand];

    $.getJSON('/assets/images/random-image-alt-text', txt => {
        altFile = "/assets/images/random-image-alt-text/" + txt[rand];

        $.get(altFile, altText => {
            ele = document.getElementById('random-image');
            ele.src = pictDir;
            ele.alt = altText;

            console.log(ele.attributes.src);
            console.log(ele.attributes.alt);

        })

    });

});