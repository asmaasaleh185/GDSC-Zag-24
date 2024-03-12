document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();

let element = document.querySelector("[name = 'elements']");
let text = document.querySelector("[name = 'texts']");
let type = document.querySelector("select");
let results = document.querySelector(".results");
console.log(type);
results.innerHTML = "";
for (let i = 1; i <= element.value; i++) {
    let newElement = document.createElement(type.value);
    newElement.classList.add("box"); 
    newElement.id = `id-${i}`;
    newElement.title = "Element";
    newElement.textContent = text.value;

    results.appendChild(newElement);
}
});