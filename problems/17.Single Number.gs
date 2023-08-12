function singleNumber(nums: number[]): number {

    let counted = Number.MIN_VALUE

    for (let i = 0; i < nums.length; i++) {
        let counter = 0
        if (nums[i] == counted) {
            continue
        }
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] == nums[j] && nums[i] != counted) {
                nums[j] = counted
                counter++
            }
        }
        if (counter < 1)
            return nums[i]
        else {
            continue
        }
    }
    return -1
};
let testNiz = [2, 2, 1]
console.log(testNiz)
console.log(singleNumber(testNiz))