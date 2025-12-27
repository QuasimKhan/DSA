// // Q - Find first repeating element of an Array

// function firstRepeating(arr) {
//     let freq = {};
//     let firstRepeatingElement = -1;

//     for (let i = 0; i < arr.length; i++) {
//         let element = arr[i];

//         if (freq[element]) {
//             freq[element]++;
//             firstRepeatingElement = element;
//             break;
//         } else {
//             freq[element] = 1;
//         }
//     }

//     return firstRepeatingElement;
// }

// console.log(firstRepeating([1, 2, 3, 3, 4, 5]));
