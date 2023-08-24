function prefixCount(words: string[], pref: string): number {
    let cnt = 0

    for (let i = 0; i < words.length; i++) {
        if (words[i].substring(0, pref.length) == pref) {
            cnt++
        }
    }
    return cnt
};

let testString = ["leetcode", "win", "loops", "success"]
let testStr = "code"

console.log(prefixCount(testString, testStr))