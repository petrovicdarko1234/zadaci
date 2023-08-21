function restoreString(s: string, indices: number[]): string {
    let str: string[] = new Array(s.length)

    for (let i = 0; i < s.length; i++) {
        str[indices[i]] = s[i]
    }
    return str.join("")
};
let testString = "codeleet"
let testNiz = [4, 5, 6, 7, 0, 2, 1, 3]

console.log(restoreString(testString, testNiz))