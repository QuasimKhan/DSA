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

const a = [1, 2, 3, 4, 5];

let sum = 0;

for (let i = 0; i < a.length; i++) {
    sum = sum + a[i];
}

console.log("SUm of the elements - ", sum);
