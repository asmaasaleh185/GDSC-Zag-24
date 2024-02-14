// assignment 1
let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
console.log(myFriends.slice(myFriends.indexOf("Ahmed"), myFriends.length - 1)); // ["Ahmed", "Elham", "Osama"];

// Method 2
console.log(myFriends.slice(myFriends.indexOf("Ahmed"), num)); // ["Ahmed", "Elham", "Osama"];

/*********************************************************************************************/ 
// assignment 2
let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here
let last = friends.pop();
let first = friends.shift();
console.log(friends); // ["Eman", "Osama"]
// friends.unshift(first), friends.push(last);

/*********************************************************************************************/ 
// assignment 3
let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code
finalArr = finalArr.concat(arrOne, arrTwo);
console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

/*********************************************************************************************/ 
// assignment 4
let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[website.length][0].slice(website.length).toUpperCase()); // ZERO

/*********************************************************************************************/ 
// assignment 5
let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
// Method 1
if (haystack.includes(needle)){
    console.log("Found");
}
// Method 2
console.log(haystack.includes(needle)? "Found" : "Not Found");
// Method 3
switch(haystack.includes(needle)){
    case true:
        {
        console.log("Found");
        break;
        }
    case false:
        {
        console.log("Not Found");
        break;
        }
}

/*********************************************************************************************/ 
// assignment 6
let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here
allArrs = allArrs.concat(arr2[arr2.indexOf("F")], arr2[arr2.indexOf("Y")]).join(arr1[arr1.indexOf("X")]);
console.log(allArrs.toLowerCase()); // fxy