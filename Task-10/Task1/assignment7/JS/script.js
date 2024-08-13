let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];

// Method 1
let allNums = [...numsOne, ...numsTwo];
console.log(allNums);

// Method 2
let mergedArray = numsOne.concat(numsTwo);
console.log(mergedArray);

// Method 3
numsOne.push(...numsTwo);
console.log(numsOne);

// Needed Output
// [1, 2, 3, 4, 5, 6];
