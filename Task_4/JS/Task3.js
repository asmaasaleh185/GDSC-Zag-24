let num = "10";

// Solution One
console.log(Number(num) + Number(num)); // 20

// Solution Two
console.log(+num + +num); // 20

// Solution Three

//console.log(num * +"2" + num % +"2"); // 20

console.log(num * (true + true) + num % (true + true)); // 20

// Solution Four
console.log(num * (true + true)); // 20