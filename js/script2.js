// Even and Odd

// User chooses even or odd
var userChoice = prompt("Odd or Even?").toLowerCase().trim();

// Validation
if (userChoice != "odd" && userChoice != "even") {
    choise = prompt("Sorry, the entered value is incorrect. Odd or Even?");
} else {
    console.log("Player choose: " + userChoice);
}

// User chooses a number
var player = parseInt(prompt("Enter a number from 1 to 5"));

// Validation
if ((player < 1) || (player > 5) || isNaN(player)) {
    player = prompt(("Sorry, the entered value is incorrect. Enter a number from 1 to 5"));
} else {
    console.log("Number chosen by the user is: " + player);
}

// CPU number
var cpu = genRandomNumber(1, 5);
console.log("CPU Number is: ", cpu);

// Sum 
var sum = player + cpu;
console.log("Sum: ", sum);

// Check
var result = evenOdd(sum);
console.log("Result: ", result);

// Winner
if (userChoice === result) {
    console.log("Congratulations, you won!");
} else {
    console.log("Sorry, you lost.");
}


// UTILITIES 
// Generating a random number for the CPU
function genRandomNumber(min, max) {
    var random = Math.floor(Math.random() * (max - min + 1)) + min;

    return random;
}

// Check if the number is odd or even
function evenOdd(num) {
    var sum;

    if (num % 2 === 0) {
        sum = "even";
    } else {
        sum = "odd";
    }

    return sum;
}


