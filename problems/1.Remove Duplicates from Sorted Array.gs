function removeDuplicates(nums: number[]): number {

    let j = nums.length

    /*for (exp1, exp2, exp3) {
        nesto
    }
    exp1
    nesto
    exp2
    exp3
    nesto
    exp2
    exp3
    nesto
    ...
    */
    for (let i = 0; i < j - 1;) {
        if (nums[i] == nums[i + 1]) {
            shift(nums, i)
            j--
        } else { //kad su razliciti pomeramo
            i++
        }
    }
    return j
};

function shift(niz: number[], mesto: number): number[] {

    for (let i = mesto; i < niz.length - 1; i++) {
        niz[i] = niz[i + 1]
    }
    return niz
}

let testNiz = [0, 0, 1, 1, 1, 2, 2, 3]

let uniq = removeDuplicates(testNiz)
console.log(testNiz)
console.log(uniq)
