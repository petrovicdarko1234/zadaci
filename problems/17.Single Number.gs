function singleNumber(nums: number[]): number {

    let counted = Number.MIN_VALUE
    for (let i = 0; i < nums.length; i++) {
        let single = true
        if (nums[i] == counted) {
            continue
        }
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] == nums[j]) {
                nums[j] = counted
                single = false
                break
            }
        }
        if (single) {
            return nums[i]
        }
    }
    return -1
};

let testNiz = [2, 2, 3, 3, 5, 5, 1]
console.log(testNiz)
console.log(singleNumber(testNiz))