// Q - Check if the two element of sorted array is equal to a target 

import { log } from "node:console"


function twoSumExists(nums: number[], target: number): boolean {

    let left: number = 0
    let right: number = nums.length - 1
    let sum: number = nums[left] + nums[right]
    while (left < right) {
        if (sum === target) return true
        if (sum < target) {
            left++
            sum = nums[left] + nums[right]
        } else if (sum > target) {
            right--
            sum = nums[left] + nums[right]
        }
    }
    return false
}

log(twoSumExists([1, 2, 3, 4, 5], 9))