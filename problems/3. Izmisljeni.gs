function searchInsert(nums: number[], target: number): number[] {
    let i: number

    for (i = 0; i < nums.length; i++) {
        if (target < nums[i]) {
            shift(i, nums)
            nums[i] = target
            return nums
        }
    }

    nums[i] = target
    return nums
};
function shift(mesto: number, niz: number[]): number[] {

    for (let i = niz.length - 1; i >= mesto; i--) {
        niz[i + 1] = niz[i]

    }
    return niz

}

let testNiz = [1, 2, 4, 5]
console.log(searchInsert(testNiz, 6))