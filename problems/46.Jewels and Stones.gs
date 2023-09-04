function numJewelsInStones(jewels: string, stones: string): number {
    let cnt = 0
    for (let i = 0; i < jewels.length; i++) {
        for (let j = 0; j < stones.length; j++) {
            if (jewels[i] == stones[j]) {
                cnt++
            }
        }
    }
    return cnt
};
let jewl = "aA"
let stone = "ZZ"

console.log(numJewelsInStones(jewl, stone))