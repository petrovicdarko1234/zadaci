function findMaxK(nums: number[]): number {

    for (let i = 0; i < nums.length; i++) {
        let max = maxNum(nums)
        for (let j = 0; j < nums.length; j++) {
            if (-1 * max == nums[j]) {
                return max
            }
        }
    }
    return -1
};

function maxNum(nums: number[]): number {
    let max = 0

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > max) {
            max = nums[i]
        }
    }
    return max
}

let testNiz = [-1, 2, -3, 3]

console.log(findMaxK(testNiz))