// assignment 1
let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let word = mix.map(function(ele){
    return isNaN(parseInt(ele)) ? ele : "";
}).reduce(function(acc, current){
    return `${acc}${current}`;
});
console.log(word);
// Elzero

/*********************************************************************************************/ 
// assignment 2
let myString = "EElllzzzzzzzeroo";

let result = myString.split("").filter(function(ele, index){
    return index === 0 || ele !== myString[index - 1];
}).join("");
console.log(result);
// Elzero

/*********************************************************************************************/ 
// assignment 3
let myArray = ["E", "l", "z", ["e", "r"], "o"];
let newArray = myArray.reduce(function(acc, current){
    if (Array.isArray(acc)){
        return acc.concat(current);
    }
    else{
        return acc.concat(current);
    }
}, []);
console.log(newArray.join(''));
// Elzero


/*********************************************************************************************/ 
// assignment 4
let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];
let numbers = numsAndStrings.filter(function(ele){
    return parseInt(ele);
}).map(function(ele){
    return -ele;
});
console.log(numbers);
// [-1, -10, 10, 20, -5, -3]


/*********************************************************************************************/ 
// assignment 5
let nums = [2, 12, 11, 5, 10, 1, 99];
let ans = nums.reduce(function(acc, current){
    return current % 2 === 0 ? acc * current : acc + current;
});
console.log(ans);
// 500