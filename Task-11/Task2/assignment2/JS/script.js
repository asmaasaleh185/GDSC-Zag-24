let date = new Date();
console.log(date);

date.setFullYear(date.getFullYear() + 10);
date.setSeconds(date.getSeconds() + 1);
date.setHours(0, 0, 1, 0);

console.log(date);
