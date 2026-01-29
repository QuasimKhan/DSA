// In this question we will find the sum of two elements of the array even if it unsorted

import { log } from "node:console"


function hasPairWithSumUnsorted(nums: number[], target: number): boolean {

    // [10, 2, 5, 3] Target = 8
    const seen = new Set()

    for (let num of nums) {
        const complement = target - num
        if (seen.has(complement)) {
            return true
        }
        seen.add(num)
    }
    return false

}

console.log(hasPairWithSumUnsorted([10, 2, 5, 3], 8))


