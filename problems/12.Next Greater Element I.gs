function nextGreaterElement(nums1: number[], nums2: number[]): number[] {

    let greaterVals: number[] = new Array(nums1.length)



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

    for (let j = index + 1; j < nums1.length; j++) {
        if (nums1[j] > nums1[index]) {
            return nums1[j]
        }
    }
    return -1
}


let testNiz1 = [2, 4]
let testNiz2 = [1, 2, 3, 4]

console.log(nextGreaterElement(testNiz1, testNiz2))