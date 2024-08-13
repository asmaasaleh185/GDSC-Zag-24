let phone = "+(995)-123 (4567)";
let regExp = /\+\(\d{3}\)-\d{3}\s\(\d{4}\)/gi;

console.log(regExp.test(phone));
console.log(phone.match(regExp));