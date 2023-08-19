function countWords(words1: string[], words2: string[]): number {

    let uniqueWords1: string[] = uniqueStr(words1)
    let uniqueWords2: string[] = uniqueStr(words2)
    let cnt = 0

    for (let i = 0; i < uniqueWords1.length; i++) {
        for (let j = 0; j < uniqueWords2.length; j++) {
            if (uniqueWords1[i] == uniqueWords2[j]) {
                cnt++
            }
        }
    }
    return cnt
};
function uniqueStr(string: string[]): string[] {

    let visited: boolean[] = new Array(string.length)
    visited.fill(false)

    let str: string[] = []
    let k = 0
    for (let i = 0; i < string.length; i++) {
        if (visited[i]) {
            continue
        }
        for (let j = i + 1; j < string.length; j++) {
            if (string[i] == string[j]) {
                visited[i] = true
                visited[j] = true
            }
        }
        if (!visited[i]) {
            str[k] = string[i]
            k++
        }
    }


    return str
}

console.log(countWords(["b", "bb", "bbb"], ["a", "aa", "aaa"]))
