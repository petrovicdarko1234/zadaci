function thirdMax(nums: number[]): number {

    if (nums.length < 2) {
        return nums[0]
    }

    let numbers: number[] = onlySpecific(nums)
    let max = findAndDltMax(numbers)

    if (numbers.length < 3) {
        return max
    }

    for (let i = 0; i <= 1; i++) {
        max = findAndDltMax(numbers)
    }
    return max
};
function findAndDltMax(nums: number[]): number {
    let max = Number.NEGATIVE_INFINITY
    let maxIndex = 0

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > max) {
            max = nums[i]
            maxIndex = i
        }
    }
    nums[maxIndex] = Number.NEGATIVE_INFINITY
    return max
}
function onlySpecific(nums: number[]): number[] {

    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] == nums[j]) {
                nums.splice(j, 1)
                j--
            }
        }
    }
    return nums
}

let testNiz = [1, 2, -2]

console.log(testNiz)

onlySpecific(testNiz)

console.log("\n", testNiz)

console.log("\n", thirdMax(testNiz))