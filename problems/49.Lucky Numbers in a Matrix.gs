function luckyNumbers(matrix: number[][]): number[] {
    let lucky: number[] = new Array()
    let n = 0

    for (let j = 0; j < matrix[0].length; j++) {
        let max = 0
        let maxI = -1
        for (let i = 0; i < matrix.length; i++) {
            if (matrix[i][j] > max) {
                max = matrix[i][j]
                maxI = i
            }
        }
        for (let k = 0; k < matrix[0].length; k++) {
            if (max > matrix[maxI][k]) {
                max = 0
                break
            }
        }
        if (max != 0) {
            lucky[n++] = max
        }
    }
    return lucky
}

let testMat = [[1, 10, 4, 2], [9, 3, 8, 7], [15, 16, 17, 12]]

console.log(luckyNumbers(testMat))
