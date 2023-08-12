/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {

    for (let i = 0; i < n; i++) {
        nums1[m + i] = nums2[i]
    }


    sortiraj(nums1)

};

function sortiraj(niz: number[]): number[] {

    let temp = 0

    for (let i = 0; i < niz.length - 1; i++) {
        for (let j = i + 1; j < niz.length; j++) {
            if (niz[i] > niz[j]) {
                temp = niz[i]
                niz[i] = niz[j]
                niz[j] = temp
            }
        }
    }
    return niz
}

let testNiz1 = [1]
let testNiz2 = [0]
merge(testNiz1, 1, testNiz2, 0,)
console.log(testNiz1)

