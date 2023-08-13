function arithmeticTriplets(nums: number[], diff: number): number {

    let triplets = 0

    for (let i = nums.length - 1; i > 0; i--) {
        for (let j = i - 1; j >= 0; j--) {
            if (nums[i] - nums[j] == diff) {
                for (let k = j - 1; k >= 0; k--) {
                    if (nums[j] - nums[k] == diff) {
                        triplets++
                    }

                }
            }
        }
    }
    return triplets

};

let testNiz = [4, 5, 6, 7, 8, 9]

console.log(arithmeticTriplets(testNiz, 2))
