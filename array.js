// // Q - find the largest number in an array

// const arr = [10, 20, 12, 32, 100, 110, 20, 30, 1];

// let largest = arr[0];

// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > largest) {
//         largest = arr[i];
//     }
// }

// console.log("Largest Number - ", largest);

//Q - Find the smallest number in an array

// const arr1 = [10, 20, 3, 34, 2, 12, 3123, 3342, 432442, 11, 2];

// let smallest = arr1[0];

// for (let i = 1; i < arr.length; i++) {
//     if (smallest > arr1[i]) {
//         smallest = arr1[i];
//     }
// }

// console.log("Smallest Number - ", smallest);

// // Q - Count how many numbers are even

// const arr2 = [10, 20, 2, 3, 4, 5, 3, 6];

// let evenCount = 0;

// for (let i = 0; i < arr2.length; i++) {
//     if (arr2[i] % 2 === 0) {
//         evenCount++;
//     }
// }

// // console.log("Total Even Number - ", evenCount);

// // Q - check if the array is sorted

// const arr = [1, 2, 3, 4, 5];

// let isArraySorted = true;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > arr[i + 1]) {
//         isArraySorted = false;
//         break;
//     }
// }

// console.log("Is array sorted - ", isArraySorted);

// Q - Second largest number

// const a = [213, 12312, 42, 12, 32, 21, 32, 342, 12, 221, 2];

// let largest = -Infinity;
// let secondLargest = -Infinity;

// for (let i = 0; i < a.length; i++) {
//     if (a[i] > largest) {
//         secondLargest = largest;
//         largest = a[i];
//     } else if (a[i] > secondLargest && a[i] !== largest) {
//         secondLargest = a[i];
//     }
// }

// console.log("Second Largest - ", secondLargest);

// Q - Reverse an array without the built in function

// const a = [1, 2, 3, 4, 5, 6, 6];

// let left = 0;
// let right = a.length - 1;

// while (left < right) {
//     let temp = a[left];
//     a[left] = a[right];
//     a[right] = temp;

//     left++;
//     right--;
// }

// console.log("Reversed Array - ", a);

// Q - sum of all elements

// const a = [1, 2, 3, 4, 5];

// let sum = 0;

// for (let i = 0; i < a.length; i++) {
//     sum = sum + a[i];
// }

// console.log("SUm of the elements - ", sum);

// Q - Count frequency of each element in an array

// const a = [1, 2, 1, 2, 1, 2, 3, 3, 1, 3, 5];

// const freq = {};

// for (let i = 0; i < a.length; i++) {
//     // if (freq[a[i]]) {
//     //     freq[a[i]]++;
//     // } else {
//     //     freq[a[i]] = 1;
//     // }

//     // we can also solve by taking a variable to sotre the element, which will look not messy

//     const element = a[i];

//     if (freq[element]) {
//         freq[element]++;
//     } else {
//         freq[element] = 1;
//     }
// }

// console.log("Frequncy : ", freq);

// // Q - Find the first repeating element

// const a = [5, 1, 3, 12, 12];

// const frequency = {};
// let firstRepeating = -1;

// for (let i = 0; i < a.length; i++) {
//     const element = a[i];

//     if (frequency[element]) {
//         frequency[element]++;
//         firstRepeating = element;
//         break;
//     } else {
//         frequency[element] = 1;
//     }
// }

// console.log("First repeating is - ", firstRepeating);

// Q - Find the first non-repeating element

// const a = [1, 1, 2, 3];

// const freq = {};
// let firstNonRepeatingElement = -1;

// for (let i = 0; i < a.length; i++) {
//     const element = a[i];
//     if (freq[element]) {
//         freq[element]++;
//     } else {
//         freq[element] = 1;
//     }
// }

// for (let i = 0; i < a.length; i++) {
//     if (freq[a[i]] === 1) {
//         firstNonRepeatingElement = a[i];
//         break;
//     }
// }

// console.log("First non repeating element - ", firstNonRepeatingElement);

// Q - Check if two arrays contain the same elements (order does not matter )

// function haveSameElements(arr1, arr2) {
//     if (arr1.length !== arr2.length) return false;

//     const freq = {};

//     // Count frequency of first array
//     for (let i = 0; i < arr1.length; i++) {
//         freq[arr1[i]] = (freq[arr1[i]] || 0) + 1;
//     }

//     // Reduce frequency using second array
//     for (let i = 0; i < arr2.length; i++) {
//         if (!freq[arr2[i]]) {
//             return false; // element missing or extra
//         }
//         freq[arr2[i]]--;
//     }

//     return true;
// }

// console.log(haveSameElements([1, 2, 3, 4, 5], [1, 2, 3, 4, 6]));

// // Q - Find all elements that appear more than once

// const arr = [1, 1, 2, 3, 4, 5];

// const freq = {};
// const duplicates = [];

// // Count frequency
// for (let i = 0; i < arr.length; i++) {
//     freq[arr[i]] = (freq[arr[i]] || 0) + 1;
// }

// // Collect elements that appear more than once
// for (let key in freq) {
//     if (freq[key] > 1) {
//         duplicates.push(Number(key));
//     }
// }

// console.log(duplicates); // [1]

// Some easy questions

// Q - Insert an element in the end of the array

const arr = [1, 2, 3, 4, 5];

arr.push(2);

console.log(arr);
