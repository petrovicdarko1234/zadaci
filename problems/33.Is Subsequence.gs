function isSubsequence(s: string, t: string): boolean {

    let subS: string[] = s.split("")
    let str: string[] = t.split("")
    let sumOfI: number[] = []
    let k = 0

    for (let i = 0; i < subS.length; i++) {
        for (let j = 0; j < str.length; j++) {
            if (subS[i] == str[j]) {
                if (i > j) {
                    continue
                }
                sumOfI[k] = i + j
                k++
                str[j] = "0"
                break
            }
        }
    }

    if (sumOfI.length != subS.length) {
        return false
    }
    for (let i = 0; i < sumOfI.length - 1; i++) {
        if (sumOfI[i] >= sumOfI[i + 1]) {
            return false
        }
    }
    return true
};
let testStr1 = "ab"
let testStr2 = "baab"

console.log(isSubsequence(testStr1, testStr2))