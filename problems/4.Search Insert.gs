function searchInsert(nums: number[], target: number): number {
    if (target < nums[0]) {
        return 0
    }

    if (nums[0] == target) {
        return 0
    }

    if (target > nums[nums.length - 1]) {
        return nums.length
    }

    let start = 0
    let end = nums.length - 1
    while (end - start > 1) {
        let halfIndex = start + Math.round((end - start) / 2)
        let halfVal = nums[halfIndex]

        if (target > halfVal) {
            start = halfIndex
        }
        else {
            end = halfIndex
        }

    }

    return end
}

let testNiz = [1, 3, 5, 7]

console.log(searchInsert(testNiz, 1))