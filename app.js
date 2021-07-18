window.addEventListener("load", randomImage)


function randomImage() {
    // titles array
    let cardTitle = ["Image-1", "Image-2", "Image-3"];

    // images array
    let randomImage = [];
    randomImage[0] = "https://images.pexels.com/photos/715134/pexels-photo-715134.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
    randomImage[1] = "https://images.pexels.com/photos/1363876/pexels-photo-1363876.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
    randomImage[2] = "https://images.pexels.com/photos/2101187/pexels-photo-2101187.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";

    // random number
    let number = Math.floor(Math.random() * randomImage.length);

    document.querySelector(".card-img-top").setAttribute("src", randomImage[number]);
    document.querySelector(".card-title").innerHTML = cardTitle[number];
};

// get random image with shuffle button
const shuffle = document.querySelector(".btn");
shuffle.addEventListener("click", randomImage);