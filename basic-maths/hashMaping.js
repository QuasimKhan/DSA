// In this code base we will discuss hash maping in DSA

const { kMaxLength } = require("node:buffer");
const { log } = require("node:console");

// we use hash maping to find out the frequecy of any elements of array or string

// Q - how many times k = 1 appear in arr [1,2,3,1,4]

// function findFreqOFK(arr, k) {
//     let count = 0;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === k) count++;
//     }

//     return count;
// }

// log(findFreqOFK([1, 3, 1, 4, 1], 1));

// Q - Find Frequncy of all elements of the array

// function frequencyOfElement(arr) {
//     let freq = {};

//     for (let i = 0; i < arr.length; i++) {
//         if (freq[arr[i]]) {
//             freq[arr[i]]++;
//         } else freq[arr[i]] = 1;
//     }

//     return freq;
// }

// log(frequencyOfElement([1, 2, 1]));

// function frequencyMap(arr) {
//     let freq = new Map();

//     for (let el of arr) {
//         if (freq.has(el)) {
//             freq.set(el, freq.get(el) + 1);
//         } else {
//             freq.set(el, 1);
//         }
//     }

//     return freq;
// }

// log(frequencyMap([1, 2, 1, 1]));

// Given an array of numbers, return the number that appears the most times.

// function frequency(arr) {
//     const freq = new Map();

//     let maxFrequency = 0;
//     let maxElement = null;

//     for (const el of arr) {
//         freq.set(el, (freq.get(el) || 0) + 1);
//     }

//     for (const [key, value] of freq) {
//         if (value > maxFrequency) {
//             maxFrequency = value;
//             maxElement = key;
//         }
//     }

//     return maxElement;
// }

// console.log(frequency([1, 2, 1]));

// Q - is anagram - anagram is the two string is given their length and freq of letter must be same order may diffrent

// function isAnagram(s, t) {
//     if (s.length !== t.length) return false;

//     const freq = new Map();

//     for (let i = 0; i < s.length; i++) {
//         freq.set(s[i], (freq.get(s[i]) || 0) + 1);
//     }

//     for (let i = 0; i < t.length; i++) {
//         if (!freq.has(t[i])) return false;
//         freq.set(t[i], freq.get(t[i]) - 1);
//     }

//     for (const value of freq.values()) {
//         if (value !== 0) return false;
//     }

//     return true;
// }

// console.log(isAnagram("siri", "siir"));

// Sum of two element must be equal to target , true if eqal else false

//Important question for comp.

// function sum(arr, target) {
//     const seen = new Set();

//     for (const el of arr) {
//         let need = target - el;
//         if (seen.has(need)) {
//             return true;
//         }
//         seen.add(el);
//     }
//     return false;
// }

// console.log(sum([1, 2, 3, 5], 8));

// Find how many subararrys whose sum is eual to k

function subarraySum(arr, K) {
    let sum = 0;
    let count = 0;
    const map = new Map();

    map.set(0, 1);

    for (const el of arr) {
        sum += el;

        if (map.has(sum - K)) {
            count += map.get(sum - K);
        }

        map.set(sum, (map.get(sum) || 0) + 1);
    }

    return count;
}
