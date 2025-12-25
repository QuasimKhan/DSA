// // Q - Find the total vowel present in a string

// function countVowel(str) {
//     let count = 0;
//     const vowels = "aeiou";

//     for (let char of str.toLowerCase()) {
//         if (vowels.includes(char)) {
//             count++;
//         }
//     }
//     return count;
// }

// console.log("Total vowel - ", countVowel("aeiou"));

// // Q - Is strign palidrome

// function isPalindrome(str) {
//     let left = 0;
//     let right = str.length - 1;

//     while (left < right) {
//         if (str[left] !== str[right]) {
//             return false;
//         }
//         left++;
//         right--;
//     }
//     return true;
// }

// console.log("Is palindrome - ", isPalindrome("agqga"));

// Q - Is valid palindDrome

// function isValidPalindrome(str) {
//     let newStr = "";
//     const validAlphaNumerical = "abcdefghijklmnopqrstuvwxyz1234567890";

//     for (let char of str.toLowerCase()) {
//         if (validAlphaNumerical.includes(char)) {
//             newStr += char;
//         }
//     }

//     console.log("new string", newStr);

//     let left = 0;
//     let right = newStr.length - 1;

//     while (left < right) {
//         if (newStr[left] !== newStr[right]) {
//             return false;
//         }

//         left++;
//         right--;
//     }

//     return true;
// }

// console.log(isValidPalindrome("agq ga"));
