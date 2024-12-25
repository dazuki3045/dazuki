const one = document.querySelector("#one")
const two = document.querySelector("#two")
const three = document.querySelector("#three")
const four = document.querySelector("#four")
const button = document.querySelector("#button")

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
button.addEventListener("click", function() {
    one.textContent = getRandomInt(0,9);
    two.textContent = getRandomInt(0,9);
    three.textContent = getRandomInt(0,9);
    four.textContent = getRandomInt(0,9);
});