// Q - How many digits in given number using extraction method

const { log } = require("console");

function countDigit(n) {
    let count = 0;

    while (n > 0) {
        // let lastDigit = n % 10;     //it has no significant in this question because we can solve this quesiotn without having last digit just by deviding the number by 10 and take only integers part from the quetent
        count = count + 1;
        n = Math.floor(n / 10);
    }

    return count;
}

// Q - Reverse of given number with method of extraction

function reverseNumber(n) {
    let sign = n < 0 ? -1 : 1;
    n = Math.abs(n); //always positve --> abs = absolute
    let reverseNumber = 0;
    while (n > 0) {
        let lastDigit = n % 10;
        reverseNumber = reverseNumber * 10 + lastDigit;
        n = Math.floor(n / 10); //It will give int value not float part
    }

    return sign * reverseNumber; //if the n is in negative the answer will be negative else positive
}

// Q - Check its palindrome or not

function isPalindrom(n) {
    const original = n;
    let reverse = 0;
    while (n > 0) {
        let lastDigit = n % 10;
        reverse = reverse * 10 + lastDigit;
        n = Math.floor(n / 10);
    }

    if (original === reverse) return true;

    return false;
}

// check is it palindrome

function isPalindrome(n) {
    const original = n;
    let reverse = 0;

    while (n > 0) {
        let lastDigit = n % 10;
        reverse = reverse * 10 + lastDigit;
        n = Math.floor(n / 10);
    }

    if (original === reverse) return true;

    return false;
}

log("Palindrome - > ", isPalindrome(121)); //Revision

function isArmstrongNumber(n) {
    const original = n;
    let armstrongNumber = 0;
    let digit = n.toString().length;

    while (n > 0) {
        let lastDigit = n % 10;
        armstrongNumber = armstrongNumber + lastDigit ** digit;

        n = Math.floor(n / 10);
    }

    return original === armstrongNumber;
}

function printAllDivisior(n) {
    if (n <= 0) return 0;
    let allDivisor = [];

    for (let i = 1; i <= n; i++) {
        if (n % i === 0) allDivisor.push(i);
    }

    return allDivisor;
}

log(printAllDivisior(0));
