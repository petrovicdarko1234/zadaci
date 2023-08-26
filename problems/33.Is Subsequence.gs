function isSubsequence(s: string, t: string): boolean {
    let j = 0

    for (let i = 0; i < t.length; i++) {
        if (t[i] == s[j]) {
            j++
        }
    }
    if (j == s.length) {
        return true
    }
    return false
};
let testStr1 = "ab"
let testStr2 = "baab"

console.log(isSubsequence(testStr1, testStr2))