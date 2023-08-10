function removeElement(nums: number[], val: number): number {
    let l = nums.length
    let count = 0
    for (let i = 0; i < l;) {
        if (nums[i] == val) {
            shift(i, nums)
            l--
            count++
        }

        else { i++ }
    }
    return nums.length - count
};

function shift(mesto: number, niz: number[]): number[] {
    for (let i = mesto; i < niz.length - 1; i++) {
        niz[i] = niz[i + 1]
    }
    return niz
}


let testNiz = [0, 1, 2, 2, 3, 0, 4, 2]
let kolko = removeElement(testNiz, 2)
console.log(testNiz)
console.log(kolko)