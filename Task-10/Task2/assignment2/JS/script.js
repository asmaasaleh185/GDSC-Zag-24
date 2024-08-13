let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";
let regExp = /\bOS\d*O/gi;

console.log(regExp.test(specialNames));
console.log(specialNames.match(regExp));
// Output
// ['Os10O', 'OsO', 'Os100O']
