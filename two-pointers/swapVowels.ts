import { log } from "node:console"

function swapVowels(s: string): string {

    const vowels: string = "aeiouAEIOU"

    const arr: string[] = s.split("")
    let left: number = 0
    let right: number = arr.length - 1

    while (left < right) {
        if (!vowels.includes(arr[left])) {
            left++
        } else if (!vowels.includes(arr[right])) {
            right--
        }
        if (vowels.includes(arr[left]) && vowels.includes(arr[right])) {
            let temp = arr[left]
            arr[left] = arr[right]
            arr[right] = temp
            left++
            right--
        }


    }

    const result: string = arr.join("")
    return result
}


log(swapVowels("quasim"))