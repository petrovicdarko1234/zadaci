function isMonotonic(nums: number[]): boolean {
    let count = 0

    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] <= nums[i + 1]) {
            count++
        } else {
            count--
        }
    }

    if (count == nums.length - 1) {
        return true
    }

    count = 0
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] >= nums[i + 1]) {
            count++
        } else {
            count--
        }
    }

    if (count == nums.length - 1) {
        return true
    }

    return false
};


let testNiz = [4, 3, 2]
console.log(isMonotonic(testNiz))