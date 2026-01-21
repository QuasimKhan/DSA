// Q - Find the given target is equal to pair with the given sorted array 

import { log } from "node:console"


function hasPairWithSum(arr: number[], target: number): boolean | string {
    if (arr.length === 0) return "Array is Empty"

    let left: number = 0
    let right: number = arr.length - 1

    while (left < right) {
        if (arr[left] + arr[right] < target) {
            left++
            continue
        }
        if (arr[left] + arr[right] > target) {
            right--
            continue
        }
        if (arr[left] + arr[right] === target) {
            return true
        }
    }

    return false

}

log(hasPairWithSum([1, 3, 4, 6, 10], 7))