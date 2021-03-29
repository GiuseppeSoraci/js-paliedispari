// Palindrome

// User word
var userWord = prompt("Insert a word");
console.log(userWord);

// Reverse word
var reverseWord = reverseChars(userWord);
console.log(reverseWord);

// Check if the word is palindrome or not
if (userWord == reverseWord) {
    console.log("It is palindrome");
} else {
    console.log("It is NOT palindrome");
}

// UTILITIES
// Reverse the word
function reverseChars(word) {
    var reverse = "";

    for (var i = word.length - 1; i >= 0; i--) {
        reverse += word[i];
    }

    return reverse;
}