let element1 = document.body.firstElementChild;
let element2 = document.querySelector(".two");
let temp = element1.textContent;
element1.textContent = element2.textContent;
element2.textContent = temp.concat(" 2");
element1.setAttribute("title", element2.getAttribute("title"));
element2.setAttribute("title", temp);
console.log(element1.getAttribute("title"));
console.log(element2.getAttribute("title"));