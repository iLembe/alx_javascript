function divideBy(firstNumber) {
    return function(secondNumber) {
        return secondNumber / firstNumber;
    };
}

function addBy(firstNumber) {
    return function(secondNumber) {
        return firstNumber + secondNumber;
    };
}

var addBy100 = addBy(100);
var addBy1000 = addBy(1000);
var divideBy10 = divideBy(10);
var divideBy100 = divideBy(100);

// Example usage:
// console.log(addBy100(20));   // This will display 120
// console.log(addBy1000(50));  // This will display 1050
// console.log(divideBy10(80)); // This will display 8
// console.log(divideBy100(500));// This will display 5

