function rowAndMaximumOnes(mat: number[][]): number[] {

    let ones: number[] = countOnes(mat)
    let index = 0
    let mostOnes = 0

    for (let i = 0; i < ones.length; i++) {
        if (mostOnes < ones[i]) {
            mostOnes = ones[i]
            index = i
        }
    }
    return [index, mostOnes]
};
function countOnes(matrix: number[][]): number[] {

    let ones: number[] = new Array(matrix.length)

    for (let i = 0; i < matrix.length; i++) {
        let cnt = 0
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] == 1) {
                cnt++
            }
        }
        ones[i] = cnt
    }
    return ones
}

let testMat = [[0, 0, 0], [0, 1, 1]]
console.log(rowAndMaximumOnes(testMat))