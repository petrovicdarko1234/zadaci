function numIdenticalPairs(nums: number[]): number {
    let hashMap = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
        let x = hashMap.get(nums[i])
        if (hashMap.has(nums[i]) && x != undefined) {
            hashMap.set(nums[i], x + 1)
        } else {
            hashMap.set(nums[i], 1)
        }
    }
    let count = 0
    let pairs = Array.from(hashMap.entries())
    for (let i = 0; i < pairs.length; i++) {
        let value = pairs[i][1]
        if (value >= 2) {
            count += factorial(value - 1)
        }
    }
    return count
    // for (let [key, value] of hashMap) {
    //     console.log(key, value);
    // }
};
function factorial(num: number): number {
    if (num == 1) return 1
    else return num + factorial(num - 1)
}

let testNiz = [1, 1, 1, 1]

console.log(numIdenticalPairs(testNiz))

