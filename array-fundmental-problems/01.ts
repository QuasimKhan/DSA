// Q - Given an array arr[], the task is to print every alternate element of the array starting from the first element.

// Input: arr[] = [10, 20, 30, 40, 50]
// Output: 10 30 50
// Explanation: Print the first element (10), skip the second element (20), print the third element (30), skip the fourth element(40) and print the fifth element(50).

// Input: arr[] = [-5, 1, 4, 2, 12]
// Output: -5 4 12

// function printAlternateElements(arr: number[]) {
//     const array = []
//     for (let i = 0; i < arr.length; i = i + 2) {
//         array.push(arr[i])
//     }
//     return array
// }




// // Q - Check sorted 

// function isSorted(arr: number[]) {
//     let n = arr.length;
//     for (let i = 1; i < n; i++) {
//         if (arr[i - 1] > arr[i]) {
//             return false;
//         }
//     }

//     return true;
// }

// console.log(isSorted([5, 4, 3, 2, 1]))



// Q - Remove duplicate of sorted array

function removeDuplicated(arr: number[]): number[] {
    let uniqueArrays: number[] = []


    for (let i = 0; i < arr.length; i++) {
        if (uniqueArrays.includes(arr[i])) {        //Include takes O(n) time complexity to check wheither it is present in the array or not so total time complexity of this question is O(n*n) = n sq., SO this is not optimal solution it can be better or optimized 
            continue
        }

        uniqueArrays.push(arr[i])
    }

    return uniqueArrays
}


// function removeDuplicateUsingSet(arr: number[]) {
//     if (arr.length === 0) return 0

//     return [...new Set(arr)];


// }


// console.log(removeDuplicateUsingSet([1, 2, 3, 3, 4]))



// // Q - Generate all subarray 

// function generateAllSubarrays(arr) {
//     const result = [];

//     for (let i = 0; i < arr.length; i++) {
//         let subarray = [];
//         for (let j = i; j < arr.length; j++) {
//             subarray.push(arr[j]);
//             result.push([...subarray]);
//         }
//     }

//     return result;
// }


// Q - Reverse an array 
function reverseArray(arr: number[]) {
    let left = 0
    let right = arr.length - 1

    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]]
        left++
        right--

    }

    return arr
}

console.log(reverseArray([1, 2, 3, 4, 5]))