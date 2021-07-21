// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {

    let palindromeStr = '';
    
    for (let char of str) {
        palindromeStr = char + palindromeStr
    }

    return str === palindromeStr ? true : false;
}

module.exports = palindrome;