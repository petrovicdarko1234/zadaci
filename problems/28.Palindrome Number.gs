function isPalindrome(x: number): boolean {
    if (x < 0) {
        return false
    }

    let niz = uNiz(x)
    let i = 0
    let j = niz.length - 1

    while (i != j && j > i) {
        if (niz[i] != niz[j]) {
            return false
        }
        i++
        j--
    }
    return true
};
function uNiz(x: number): number[] {
    let str: string = x.toString()
    let niz: number[] = new Array(str.length)

    for (let i = 0; i < str.length; i++) {
        let temp = parseInt(str[i])
        niz[i] = temp
    }
    return niz
}

let testBroj = 11
console.log(isPalindrome(testBroj))
