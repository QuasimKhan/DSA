import { log } from "node:console"


// [1, 2, 4, 2, 3, 3]
function maxArea(height: number[]): number {
    let left: number = 0
    let right: number = height.length - 1
    let maxArea = 0

    while (left < right) {
        const width = right - left

        const h = Math.min(height[left], height[right])

        const area = width * h

        maxArea = Math.max(maxArea, area)

        if (height[left] < height[right]) {
            left++;
        } else if (height[left] > height[right]) {
            right--;
        } else {
            left++;
            right--;
        }
    }

    return maxArea

}


log(maxArea([1, 2, 4, 2, 3, 3]))