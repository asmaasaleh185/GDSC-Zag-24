let input = prompt("Print Number From – To", "Example: 5-20");
input = input.split("-");
// console.log(input);
let num1 = parseInt(input[0].trim());
let num2 = parseInt(input[1].trim());

let start = Math.min(num1, num2);
let end = Math.max(num1, num2);

let content = `<ul>`;
for(let i = start; i <= end; i++){
    content += `
        <li>${i}</li>
    `
}
content += `</ul>`;
document.body.innerHTML = content;