// In this we will know about everything on set

const { log } = require("node:console");

// Set Allows to store unique values of any type
// It internally uses hashtable which makes searh, insert and delete operations faster than array, hashtable allows these operation on average in constant time
//Only unique values are allowed, duplications will be ignored like set in mathematics
//A set can be created either empty or by providing an iterable like array or string.

let s1 = new Set([10, 20, 30, 40, 50, 30]);

console.log(s1); //Output Set(5) { 10, 20, 30, 40, 50 }, it means the unique elements is considerd then ignored if any duplication
const array = [...s1];

log(array);

let s2 = new Set(["gfg", "fgf", "ggf"]);
console.log(s2); //Output Set(3) { 'gfg', 'fgf', 'ggf' }

let s3 = new Set("fooood");
console.log(s3); //Set(3) { 'f', 'o', 'd' }

// removing duplicate from the array , we also use set to remove duplication like this

const arr = [1, 2, 2, 3, 4, 4];

const uniqueArray = [...new Set(arr)];

log(uniqueArray);
