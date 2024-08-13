let theNumber = 100020003000;
// let setOfNumbers = new Set([...theNumber]);

console.log(+[...new Set([...theNumber.toString()])].sort().join(''));
// Needed Output
// 123;
