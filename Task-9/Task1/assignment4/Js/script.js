let div = document.querySelector("div");
let counter = div.innerText;
let counterInterval = setInterval(function () {
    if (counter > 5) {
        counter--;
        div.textContent = counter;
    } else {
        clearInterval(counterInterval);
        window.open("https://Elzero.org", "", "width=500, height=500");
    }
}, 1000);
