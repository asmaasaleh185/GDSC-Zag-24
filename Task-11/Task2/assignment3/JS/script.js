let date = new Date();
date.setDate(1);
date.setDate(date.getDate() - 1)
console.log(date)

let monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

console.log(`Previous Month Is ${monthNames[date.getMonth()]} And Last Day Is ${date.getDate()}`);