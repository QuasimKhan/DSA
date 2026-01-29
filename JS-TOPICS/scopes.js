// In this code base we will se the scope of variables in js

const { log } = require("node:console");

// var - Function scoped not block-scoped

// if (true) {
//     // var x = 10;
// }

// log(x); //10 because if and loops are block not function

// function test() {
//     var n = 10;
// }

// log(n); //ReferenceError that n is not defined because var is not acceable outside the funcition

// Hoisting with var

// what is hoisting ?
// Hoisitng is something like if the variable is used before the declartion of the varible but instead of showing reference error it show undefined unlike let or const

// log(x); //undefined
// var x = 10;
