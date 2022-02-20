const  images = [
    "space1",
    "space2",
    "space3",
    "space4",
    "space5",
    "space6"
];

const body = document.querySelector("body");

const randomNumber = number = Math.floor(Math.random() * images.length);

const paintImage = imgNumber => {
    const img = new Image();
    img.src = `src/img/${images[imgNumber]}.jpg`;
    img.classList.add("bgImage");
    body.appendChild(img);
};

paintImage(randomNumber);
