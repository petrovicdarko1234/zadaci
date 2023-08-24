function isPalindrome(x: number): boolean {

    if (x < 0) {
        return false
    }

    let arr: number[] = numToArr(x)
    let i = 0
    let j = arr.length - 1

    while (i != j && j > i) {
        if (arr[i] != arr[j]) {
            return false
        }
        i++
        j--
    }

    return true
};
 function numToArr(x: number): number[] {
    let arr: number[] = []
    let num: number = x
    let k = 0

    while (num != 0) {
        arr[k] = num % 10
        num = Math.round(num / 10)
        k++
    }
    return arr
}

let testBroj = 11
console.log(isPalindrome(testBroj))
