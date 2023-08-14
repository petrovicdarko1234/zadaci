function romanToInt(s: string): number {

    let fromRoman = new Map<string, number>([
        ["I", 1],
        ["V", 5],
        ["X", 10],
        ["L", 50],
        ["C", 100],
        ["D", 500],
        ["M", 1000]
    ]);

    let sum = 0
    for (let i = 0; i < s.length; i++) {
        let ele0 = mapGet(fromRoman, s[i])
        let ele1 = mapGet(fromRoman, s[i + 1])
        if (i < s.length - 1 && ele0 < ele1) {
            sum += ele1 - ele0
            i++
        } else {
            sum += ele0
        }
    }
    return sum
}

function mapGet(map: Map<string, number>, key: string): number {
    let val = map.get(key)

    if (val != undefined) {
        return val
    }
    return -1
}

let testString = "MCMXCIV"
console.log(romanToInt(testString))