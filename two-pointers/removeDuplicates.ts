// Q - Given a sorted array, remove duplicates in-place such that each unique element appears once. Return the count of unique elements.

import { log } from "node:console"


function removeDuplicates(nums: number[]): number {
    if (nums.length === 0) return 0;

    let slow = 0;

    for (let fast = 1; fast < nums.length; fast++) {
        if (nums[fast] !== nums[slow]) {
            slow++;
            nums[slow] = nums[fast];
        }
    }

    return slow + 1;
}

log(removeDuplicates([1, 1, 1, 2]))