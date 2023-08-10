function numberOfPairs(nums: number[]): number[] {

    let pairCnt = 0

    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] == nums[j] && nums[i] != -1) {
                pairCnt++
                nums[i] = -1
                nums[j] = -1

            }
        }
    }


    return [pairCnt,[nums.length - pairCnt * 2]]

};

let testNiz = [0]
console.log(numberOfPairs(testNiz))