function findMaxK(nums: number[]): number {

    for (let i = 0; i < nums.length; i++) {
        let max = maxNum(nums)
        for (let j = 0; j < nums.length; j++) {
            if (max == (nums[j] * (-1)) && max != 0) {
                return max
            }
        }
    }
    return -1
};

function maxNum(nums: number[]): number {
    let max = 0
    let maxIndex = 0

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > max) {
            max = nums[i]
            maxIndex = i
        }
    }
    nums[maxIndex] = 0
    return max
}

let testNiz = [-1, 2, 4, 3]

console.log(findMaxK(testNiz))