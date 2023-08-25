function majorityElement(nums: number[]): number {

    if (nums.length < 2) {
        return nums[0]
    }

    let vis: boolean[] = new Array(nums.length).fill(false)

    for (let i = 0; i < nums.length - 1; i++) {
        let cnt = 1
        if (vis[i]) {
            continue
        }
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] == nums[j]) {
                cnt++
                vis[j] = true
            }
        }
        if (cnt > nums.length / 2) {
            return nums[i]
        }
    }
    return -1
};

let testNiz = [3, 2, 3]
console.log(majorityElement(testNiz))