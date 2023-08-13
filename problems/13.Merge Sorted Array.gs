/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {

    let l1 = m - 1
    let l2 = n - 1
    let k = nums1.length - 1

    while (l2 >= 0) {
        if (nums1[l1] > nums2[l2]) {
            nums1[k] = nums1[l1]
            l1--
        } else {
            nums1[k] = nums2[l2]
            l2--
        }
        k--
    }
};

let testNiz1 = [1, 2, 3, 0, 0, 0]
let testNiz2 = [2, 5, 6]

merge(testNiz1, 3, testNiz2, 3)
console.log(testNiz1)
