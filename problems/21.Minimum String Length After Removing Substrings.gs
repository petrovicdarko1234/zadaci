function minLength(s: string): number {

    let str = s.split("")
    let n = true

    while (n) {
        n = false
        for (let i = 0; i < str.length - 1; i++) {
            if (str[i] == "A" && str[i + 1] == "B") {
                str.splice(i, 2)
                n = true
            }
            if (str[i] == "C" && str[i + 1] == "D") {
                str.splice(i, 2)
                n = true
            }
        }
    }
    return str.length
}
let testString = "ABFCACDB"

console.log(minLength(testString))