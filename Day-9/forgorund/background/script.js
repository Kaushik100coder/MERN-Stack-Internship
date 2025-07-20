function setForeground(color) {
    document.getElementById('foreground-box').style.backgroundColor = color;
}

function setBackgroundGradient(gradient) {
    document.getElementById('preview-box').style.background = gradient;
}

function setBackground(color) {
    document.getElementById('background-box').style.backgroundColor = color;
}

function setForegroundImage(imageSrc) {
    const box = document.getElementById('foreground-box');
    box.innerHTML = `<img src="${imageSrc}" alt="Selected Car" />`;
}