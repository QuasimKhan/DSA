// // Q - Find the maximum sum of any subarray of the size k

// function maxSumSubarray(arr, k) {
//     let windowSum = 0;
//     let maxSum = -Infinity;

//     // build first window
//     for (let i = 0; i < k; i++) {
//         windowSum += arr[i];
//     }

//     maxSum = windowSum;

//     // slide the window
//     for (let i = k; i < arr.length; i++) {
//         windowSum = windowSum - arr[i - k] + arr[i];
//         maxSum = Math.max(maxSum, windowSum);
//     }

//     return maxSum;
// }

// // Example
// const arr = [2, 1, 5, 1, 3, 2];
// const k = 3;

// console.log(maxSumSubarray(arr, k)); // 9

// Q - Count distinct 3 letters substring

function countGoodSubstrings(s) {
    // s: string input
    let count = 0;

    for (let i = 0; i <= s.length - 3; i++) {
        const a = s[i];
        const b = s[i + 1];
        const c = s[i + 2];

        if (a !== b && b !== c && a !== c) {
            count++;
        }
    }
    return count;
}
