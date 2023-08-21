function stringMatching(words: string[]): string[] {
    let str: string[] = []
    let k = 0

    for (let i = 0; i < words.length - 1; i++) {
        for (let j = i + 1; j < words.length; j++) {
            if (words[i].includes(words[j])) {
                str[k] = words[j]
                k++
                continue
            }
            if (words[j].includes(words[i])) {
                str[k] = words[i]
                k++
            }
        }
    }

    for (let i = 0; i < str.length - 1; i++) {
        for (let j = i + 1; j < str.length; j++) {
            while (str[i] == str[j]) {
                str.splice(j, 1)
            }
        }
    }
    return str
};
let testString = ["zjc", "ezjc", "xtwo", "zzjc", "jwx", "awzzjcv"]
console.log(stringMatching(testString))