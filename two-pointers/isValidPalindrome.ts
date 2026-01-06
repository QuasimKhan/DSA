// Q - is valid palindrome with contrains

function isPalindrome(s: string): boolean {

    const alphaNumeric: string = "abcdefghijklmnopqrstuvwxyz1234567890"

    let left: number = 0
    let right: number = s.length - 1
    const str: string = s.toLowerCase().trim()

    while (left < right) {
        if (!alphaNumeric.includes(str[left])) {
            left++
            continue;
        } else if (!alphaNumeric.includes(str[right])) {
            right--
            continue;
        }

        if (str[left] !== str[right]) return false;

        left++
        right--

    }

    return true
}

console.log(isPalindrome("abc    ba"));
