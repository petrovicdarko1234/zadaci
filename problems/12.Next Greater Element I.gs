function nextGreaterElement(nums1: number[], nums2: number[]): number[] {

    let rezultat: number[] = new Array(nums1.length)

    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            if (nums1[i] == nums2[j]) {
                for (let k = j; k < nums2.length; k++) {
                    if (nums2[k] > nums2[j]) {
                        rezultat[i] = nums2[k]
                        break
                    }
                    else {
                        rezultat[i] = -1
                    }
                }


            }
        }
    }

    return rezultat

};

let testNiz1 = [2, 4]
let testNiz2 = [1, 2, 3, 4]

console.log(nextGreaterElement(testNiz1, testNiz2))