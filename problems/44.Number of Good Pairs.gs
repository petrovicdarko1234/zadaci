function numIdenticalPairs(nums: number[]): number {

    let recurrenceMap = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
        let cnt = recurrenceMap.get(nums[i])
        if (cnt != undefined) {
            recurrenceMap.set(nums[i], cnt + 1)
        } else {
            recurrenceMap.set(nums[i], 1)
        }
    }
    let count = 0
    let recurrences = Array.from(recurrenceMap.entries())
    for (let i = 0; i < recurrences.length; i++) {
        let cnt = recurrences[i][1]
        if (cnt >= 2) {
            count += factorial(cnt - 1)
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

