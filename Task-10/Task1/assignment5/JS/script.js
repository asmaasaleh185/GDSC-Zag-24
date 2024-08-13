let theName = "Elzero";

// Method 1
console.log([...theName]);

// Method 2
console.log([...new Set([...theName])]);

// Method 3
console.log(Array.from(theName));

// Method 4
console.log(theName.split(""));

// Method 5
let arr = [];
theName.split("").forEach((char) => arr.push(char));
console.log(arr);

// Method 6
console.log(Object.assign([], theName));

// Needed Output
// ["E", "l", "z", "e", "r", "o"];
