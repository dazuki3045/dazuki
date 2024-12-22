const red = document.querySelector("#red")
const yellow = document.querySelector("#yellow")
const green = document.querySelector("#green")
const text = document.querySelector("#text")

function resetButtons() {
    red.style.backgroundColor = "grey";
    green.style.backgroundColor = "grey";
    yellow.style.backgroundColor = "grey";
}

red.addEventListener("click", function() {
    resetButtons();
    red.style.backgroundColor = "red";
    text.textContent = "stop";
    text.style.color = "red";
});

yellow.addEventListener("click", function() {
    resetButtons();
    yellow.style.backgroundColor = "yellow";
    text.textContent = "wait";
    text.style.color = "yellow";
});

green.addEventListener("click", function() {
    resetButtons();
    green.style.backgroundColor = "green";
    text.textContent = "go";
    text.style.color = "green";
});