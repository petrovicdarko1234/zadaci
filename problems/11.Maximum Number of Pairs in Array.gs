function numberOfPairs(nums: number[]): number[] {
    let count = 0
    let ostatak = 0

    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] == nums[j] && nums[i] != -1) {
                count++
                nums[i] = -1
                nums[j] = -1

            }
        }
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != -1) {
            ostatak++
        }
    }

    return [count, ostatak]

};

let testNiz = [0]
console.log(numberOfPairs(testNiz))