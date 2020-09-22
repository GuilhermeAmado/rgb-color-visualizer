const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");

const redTextDisplay = document.getElementById("red-value");
const greenTextDisplay = document.getElementById("green-value");
const blueTextDisplay = document.getElementById("blue-value");

const colorDisplay = document.querySelector(".color-display");
const mainContainer = document.querySelector(".main-container");

const rgb = {
    red: 0,
    green: 0,
    blue: 0
}

function renderColor(rgb) {
    colorDisplay.style.backgroundColor = `rgb(${rgb.red}, ${rgb.green}, ${rgb.blue})`;
    mainContainer.style.borderTop = `5px solid rgb(${rgb.red}, ${rgb.green}, ${rgb.blue})`;
}

function setColors() {
    rgb.red = parseInt(red.value);
    rgb.green = parseInt(green.value);
    rgb.blue = parseInt(blue.value);

    redTextDisplay.value = rgb.red;
    greenTextDisplay.value = rgb.green;
    blueTextDisplay.value = rgb.blue;

    renderColor(rgb);
}

red.addEventListener("input", setColors);
green.addEventListener("input", setColors);
blue.addEventListener("input", setColors);
window.addEventListener("load", setColors);