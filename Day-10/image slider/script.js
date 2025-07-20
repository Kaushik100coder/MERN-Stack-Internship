const images = [
    "images/bollide.png",
    "images/huracaan.png",
    "images/jesko.png",
    "images/bugatti.png"
];

let currentIndex = 0;

function showImage(index) {
    const imgElement = document.getElementById("slider-image");
    imgElement.src = images[index];
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}