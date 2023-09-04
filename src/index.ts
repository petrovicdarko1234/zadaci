function countKDifference(nums: number[], k: number): number {
    let hashMap = new Map<number, number>()
    let cnt = 0

    for (let i = 0; i < nums.length; i++) {
        add(hashMap, nums[i] + k)
        add(hashMap, nums[i] - k)
        let x = hashMap.get(nums[i])
        if (x != undefined) {
            cnt += x
        }
    }
    return cnt
};
function add(hashMap: Map<number, number>, key: number) {
    let x = hashMap.get(key)
    if (x != undefined) {
        hashMap.set(key, x + 1)
    } else {
        hashMap.set(key, 1)
    }
}

let testNiz = [1, 2, 2, 1]

console.log(countKDifference(testNiz, 1))