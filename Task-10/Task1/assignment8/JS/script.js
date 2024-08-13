let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];

console.log(+([...(n1.length * n2.shift()).toString()].sort().reverse().join('')));
// Needed Output
// 210;
