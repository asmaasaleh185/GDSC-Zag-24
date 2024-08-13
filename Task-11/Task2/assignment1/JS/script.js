let dateOfBirth = new Date(2004, 4 - 1, 23);
let currentDate = new Date();

let diffDate = currentDate - dateOfBirth;
let seconds = Math.floor(diffDate / 1000);
let minutes = Math.floor(seconds / 60);
let hours = Math.floor(minutes / 60);
let days = Math.floor(hours / 24);
let months = Math.floor(days / 30);
let years = Math.floor(months / 12);

console.log(`${seconds} Seconds`);
console.log(`${minutes} Minutes`);
console.log(`${hours} Hours`);
console.log(`${days} Days`);
console.log(`${months} Months`);
console.log(`${years} Years`);

