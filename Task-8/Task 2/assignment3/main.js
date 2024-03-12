let element = document.querySelector("[name = 'dollar']");
let result = document.querySelector(".result");
function updatedResult(){
    let dollarAmount = element.value;
    let egyAmount = (dollarAmount * 15.6).toFixed(2);
    result.textContent = `${dollarAmount} USD Dollar = ${egyAmount} Egyptian Pound`;
}
element.addEventListener('input', updatedResult);