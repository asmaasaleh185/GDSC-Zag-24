let birthDate = new Date("2004-4-23");
console.log(birthDate.toString());

let birthDateParsed = new Date(Date.parse("Apr 23 2004"));
console.log(birthDateParsed.toString());

let birthDateComponents = new Date(2004, 3, 23, 0, 0, 0); // Months are 0-indexed
console.log(birthDateComponents.toString());
