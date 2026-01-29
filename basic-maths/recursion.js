// Infinite recursion

const { log } = require("console");

// function print() {
//     log(1);
//     print();
// }

// print(); //It will exute infinitly , so we have to give a base conditon to stop the loop, it stops at some point it is diffrent in programming languages but this is colled stack overflow

// Q - Print count to 10 using recursion

// let count = 0;

// function printCount() {
//     if (count === 11) return;

//     log(count);
//     count++;
//     printCount();
// }

// printCount();

// Q - Print name five times

/*let name = "Quasim";
let count = 0;
function printName() {
    if (count === 5) return;

    log(name);
    count++;

    printName();
}

printName();*/

// Q - Print from one to n

// function printNum(current, n) {
//     if (current === n) return;

//     console.log(current);
//     printNum(current + 1, n);
// }

// printNum(1, 11);

// Q - Print N to 1

// function printNum(n) {
//     if (n === 0) return;

//     log(n);

//     printNum(n - 1);
// }

// printNum(10);

// Q - Print Name

// function printName(count = 0, name = "Quasim") {
//     if (count === 5) return;

//     log(name);

//     printName(count + 1, name); //We can not do this count++ instead we have to do this count + 1
// }

// printName();

// Problem 3 — Sum of First N Numbers (Now It Gets Real)

// function sumOfN(n, sum = 0, count = 1) {
//     if (count > n) return sum;

//     return sumOfN(n, sum + count, count + 1);
// }

// log(sumOfN(3));

// Count from 1 to N  Using Backtraking (not i + 1)

// function print1toN(i) {
//     if (i < 1) return;

//     print1toN(i - 1);
//     console.log(i);
// }

// print1toN(5);

// Q - Sum of N numbers

// function sumOfN(i, sum = 0) {
//     if (i < 0) return sum;

//     return sumOfN(i - 1, sum + i);
// }

// console.log(sumOfN(5));

// function sumOfN(n) {
//     if (n === 0) return 0;

//     return n + sumOfN(n - 1);
// }

// log(sumOfN(5));

// Factorial  --> 5! = 5*4*3*2*1

// function factorial(n) {
//     if (n === 0) return 1; //0! = 1

//     return n * factorial(n - 1);
// }

// log(factorial(4));

// Q - is palindrom using recursion

// Exam - 'madam' --> true , 'abba' --> true , 'abc' --> false

// function isPalindrome(str, left = 0, right = str.length - 1) {
//     if (left >= right) return true;

//     if (str[left] !== str[right]) return false;

//     return isPalindrome(str, left + 1, right - 1);
// }

// log(isPalindrome("madama"));

// Q - Reverse an array using two pointer in recursion

// function reverseArray(arr, left = 0, right = arr.length - 1) {
//     if (left >= right) return arr;
//     [arr[left], arr[right]] = [arr[right], arr[left]];

//     return reverseArray(arr, left + 1, right - 1);
// }

// function reverseArray(arr, i = 0) {
//     if (i >= arr.length - i - 1) return arr;

//     [arr[i], arr[arr.length - i - 1]] = [arr[arr.length - i - 1], arr[i]];

//     return reverseArray(arr, i + 1);
// }

function reverseArray(arr, i = 0) {
    if (i >= arr.length / 2) return arr;

    const j = arr.length - 1 - i;
    [arr[i], arr[j]] = [arr[j], arr[i]];

    return reverseArray(arr, i + 1);
}

log(reverseArray([1, 2, 3, 4]));
//
