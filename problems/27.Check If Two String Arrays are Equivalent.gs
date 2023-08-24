function arrayStringsAreEqual(word1: string[], word2: string[]): boolean {
    let str1: string = word1.join("")
    let str2: string = word2.join("")
    return str1 == str2
};

let testString1 = ["abc", "d", "defg"]
let testString2 = ["abcddefg"]
console.log(arrayStringsAreEqual(testString1, testString2))


