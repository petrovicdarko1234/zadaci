function dominantIndex(nums: number[]): number {
    let max = 0
    let secMax = 0
    let index = 0

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > max) {
            secMax = max
            max = nums[i]
            index = i
        } else if (max > nums[i] && nums[i] > secMax) {
            secMax = nums[i]
        }
    }

    if (max / secMax >= 2) {
        return index
    }
    return -1
};
let testNiz = [0, 0, 3, 2]

console.log(dominantIndex(testNiz))