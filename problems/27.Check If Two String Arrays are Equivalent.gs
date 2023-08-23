function arrayStringsAreEqual(word1: string[], word2: string[]): boolean {
    let str1: string = strings(word1)
    let str2: string = strings(word2)
    return str1 == str2
};
function strings(words: string[]): string {
    let str: string = words.toString()
    return str = str.replaceAll(",", "")
}

let testString1 = ["abc", "d", "defg"]
let testString2 = ["abcddefg"]
console.log(arrayStringsAreEqual(testString1, testString2))


