console.log("dz3")
let coinDisplay = document.querySelector("#coin")
let energyDisplay = document.querySelector("#energy")
let petButton = document.querySelector("#petBtn")
energyDisplay.innerText = 200;
function plusCoin() {
    let coin = Number(coinDisplay.textContent);
    let energy = energyDisplay.innerText;
    if(energy >= 1) {
        coin += 5;
        energy -= 5;
        coinDisplay.innerText = coin;
        energyDisplay.innerText = energy;
    } else {
        console.log("Нету энергии")
    }
}
petButton.addEventListener("click" , plusCoin);