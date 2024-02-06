// Task1: Currency Formatter
function currencyFormatter(number) {
    return '$' + number.toFixed(2);
}

console.log(currencyFormatter(100.81725));
console.log(currencyFormatter(100));

/************************************************************/ 
// Task2: Check for Prime Number
function primeNumber(number) {
    if (number <= 1) return false;
    else if (number === 2) return true;
    else{
        for(let i = 2; i<= Math.sqrt(number); i++){
            if(number % i === 0) return false;
        }
        return true;
    }
}

console.log(primeNumber(1));
console.log(primeNumber(2));
console.log(primeNumber(3));
console.log(primeNumber(4));
console.log(primeNumber(29));

/************************************************************/ 
// Task3: Reverse a Number
function reverseNumber(number) {
    let reversedNumber = parseInt(number.toString().split('').reverse().join(''), 10);
    return number < 0 ? -reversedNumber : reversedNumber;
}

console.log(reverseNumber(123456));
console.log(reverseNumber(-123456));

/************************************************************/ 
// Task4: Generate Random Number within a Range
function rendomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
}

console.log(rendomNumber(1, 100));

/************************************************************/ 
// Task5: Capitalize Each Word
function CapitalizeWord(word) {
    return word.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}

console.log(CapitalizeWord("heLlo worLd"));

/************************************************************/ 
// Task6: Grade Calculator (With if statement)
function studentGrade(score) {
    if (score >= 0 && score <= 59) {
        return "F";
    }
    else if (score >= 60 && score <= 69) {
        return "D";
    }
    else if (score >= 70 && score <= 79) {
        return "C";
    }
    else if (score >= 80 && score <= 89) {
        return "B";
    }
    else if (score >= 90 && score <= 100) {
        return "A";
    }
    else {
        return "Invalid Score";
    }
}

console.log(studentGrade(95));
console.log(studentGrade(85));
console.log(studentGrade(75));
console.log(studentGrade(75));
console.log(studentGrade(55));
console.log(studentGrade(-1));

/**********************************************************/ 
// Task7: Temperature Adviser (with ternary operator)
function recommendClothing(temperature){
    return temperature < 10 
    ? "Wear a Coat." 
    :  temperature >= 10 && temperature <= 20 
    ? "Wear a Sweater." 
    : "Wear a T-Shirt.";
}

console.log(recommendClothing(5));
console.log(recommendClothing(15));
console.log(recommendClothing(25));

/**********************************************************/ 
// Task8: Calculator (with switch)
function calculator(number1, number2, operator){
    switch(operator){
        case '+':
            return number1 + number2;
        case '-':
            return number1 - number2;
        case '*':
            return number1 * number2;
        case '/':
            return number1 / number2;
        default:
            return "Invalid Operator";
    }
}

console.log(calculator(5, 3, '+'));
console.log(calculator(10, 15, '-'));
console.log(calculator(8, 2, '*'));
console.log(calculator(7, 0, '/'));
console.log(calculator(4, 6, '~'));