function sortArrayByParity(nums: number[]): number[] {

    let cont = 0

    for (let i = 0; i < nums.length - 1; i++) {

        for (let j = i + 1; j < nums.length; j++)
            if (nums[i] % 2 !== 0 && nums[j] % 2 == 0) {
                cont = nums[i]
                nums[i] = nums[j]
                nums[j] = cont
            }
    }
    return nums
};

let testNiz = [0]

console.log(sortArrayByParity(testNiz))