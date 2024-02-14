// assignment 1
function sayHello(theName, theGender) {
    // Your Code Here
    if (theGender === "Male"){
        console.log(`Hello Mr ${theName}`);
    }
    else if (theGender === undefined){
        console.log(`Hello ${theName}`);
    }
    else{
        console.log(`Hello Miss ${theName}`);
    }
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"

/*********************************************************************************************/ 
// assignment 2
function calculate(firstNum, secondNum, operation) {
    // Your Code Here
    if (secondNum === undefined){
        console.log("Second Number Not Found");
    } else {
        switch (operation){
            default:{
                console.log(firstNum + secondNum);
                break;
            }
            case 'add':{
                console.log(firstNum + secondNum);
                break;
            }
            case 'subtract':{
                console.log(firstNum - secondNum);
                break;
            }
            case 'multiply':{
                console.log(firstNum * secondNum);
                break;
            }
        }
    }
    }

  // Needed Output
  calculate(20); // Second Number Not Found
  calculate(20, 30); // 50
  calculate(20, 30, 'add'); // 50
  calculate(20, 30, 'subtract'); // -10
  calculate(20, 30, 'multiply'); // 600

/*********************************************************************************************/ 
// assignment 3
function ageInTime(theAge) {
    // Your Code Here
    if (theAge <= 100 && theAge >= 10){
        console.log(`${theAge * 12} Months`);
        console.log(`${theAge * 52} Weeks`);
        console.log(`${theAge * 365} Days`);
        console.log(`${theAge * 365 * 24} Hours`);
        console.log(`${theAge * 365 * 24 * 60} Minutes`);
        console.log(`${theAge * 365 * 24 * 3600} seconds`);
        
    } else {
        console.log("Age Out Of Range");
    }
}

  // Needed Output
  ageInTime(110); // Age Out Of Range
  ageInTime(38); // Months Example => 456 Months

/*********************************************************************************************/ 
// assignment 4
function checkStatus(a, b, c) {
    // Your Code Here
    let name = "";
    let age = 0;
    let status = true;
    if (typeof a === 'string'){
        name = a;
    }
    else if (typeof a === 'number'){
            age = a;
    }
    else{
        status = a;
    }
    if (typeof b === 'string'){
        name = b;
    }
    else if (typeof b === 'number'){
            age = b;
    }
    else{
        status = b;
    }
    if (typeof c === 'string'){
        name = c;
    }
    else if (typeof c === 'number'){
            age = c;
    }
    else{
        status = c;
    }
    if (status )
        console.log(`Hello ${name}, Your Age Is ${age}, You Are Available For Hire`);
    else
    console.log(`Hello ${name}, Your Age Is ${age}, You Are Not Available For Hire`);
}

  // Needed Output
  checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

/*********************************************************************************************/ 
// assignment 5
function createSelectBox(startYear, endYear) {
    // Your Code Here
    document.write(`<select>`);
    for(let i = startYear; i <= endYear; i++){
        document.write(`<option value = "${i}">${i}</option>`);
    }
    document.write(`</select>`);
}
createSelectBox(2000, 2021);

/*********************************************************************************************/ 
// assignment 6
function multiply(...numbers){
    let answer = 1;
    for (let i = 0; i< numbers.length; i++){
        if (typeof numbers[i] === 'number'){
            answer *= Math.floor(numbers[i]);
        }
        else{
            continue;
        }
    }
    console.log(answer);
}
multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000