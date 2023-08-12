function nextGreaterElement(nums1: number[], nums2: number[]): number[] {

    let greaterVals: number[] = new Array(nums1.length).fill(-1)



    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            if (nums1[i] == nums2[j]) {
                greaterVals[i] = nextGreater(nums2, j)
            }
        }
    }

    return greaterVals

};

function nextGreater(nums1: number[], index: number): number {
    let max = -1
    for (let i = index; i < nums1.length - 1; i++) {
        for (let j = i + 1; j < nums1.length; j++) {
            if (nums1[i] < nums1[j]) {
                max = nums1[j]
                return max
            }
        }
    }

    return max
}


let testNiz1 = [2, 4]
let testNiz2 = [1, 2, 3, 4]

console.log(nextGreaterElement(testNiz1, testNiz2))