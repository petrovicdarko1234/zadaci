function sumOfSquares(nums: number[]): number {

    let n = nums.length
    let zbir = 0

    for (let i = 0; i <= n; i++) {
        if (n % (i + 1) == 0)
            zbir += nums[i] * nums[i]
    }
    return zbir
};


let testNiz = [2, 7, 1, 19, 18, 3]

console.log(sumOfSquares(testNiz))