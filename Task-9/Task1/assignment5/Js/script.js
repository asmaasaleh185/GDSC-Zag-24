let div = document.querySelector("div");
let counter = parseInt(div.innerText);
let counterInterval = setInterval(function () {
    if (counter > 0) {
        counter--;
        if (counter === 5) {
        window.open("https://Elzero.org", "ElzeroPopup", "width=500, height=500");
        }
        div.textContent = counter;
    } else {
        clearInterval(counterInterval);
    }
}, 1000);
