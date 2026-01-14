import { log } from "node:console"

function maxSumSubarray(nums: number[], k: number): number {
    let left: number = 0
    let windowSum: number = 0
    let maxSum: number = 0

    for (let right = 0; right < nums.length; right++) {
        windowSum += nums[right]

        if (right - left + 1 > k) {
            windowSum -= nums[left]
            left++
        }

        if (right - left + 1 === k) {
            maxSum = Math.max(maxSum, windowSum)
        }
    }

    return maxSum
}


log(maxSumSubarray([2, 3, 1, 3, 21, 2], 2))