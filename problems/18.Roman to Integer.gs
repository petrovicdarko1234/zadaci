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
        if (i < s.length - 1 && mapGet(fromRoman, s[i]) < mapGet(fromRoman, s[i + 1])) {
            sum += mapGet(fromRoman, s[i + 1]) - mapGet(fromRoman, s[i])
            i++
        } else {
            sum += mapGet(fromRoman, s[i])
        }

    };
    // IXX
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