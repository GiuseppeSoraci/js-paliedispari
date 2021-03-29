// Palindrome

var userWord = prompt("Insert a word");
console.log(userWord);

var wordReverse = reverseChars(userWord);
console.log(wordReverse);


function reverseChars(word) {
    var reverse = "";

    for (var i = word.length - 1; i >= 0; i--) {
        reverse += word[i];
    }

    return reverse;
}

if (userWord == wordReverse) {
    console.log("It is palindrome");
} else {
    console.log("It is NOT palindrome");
}