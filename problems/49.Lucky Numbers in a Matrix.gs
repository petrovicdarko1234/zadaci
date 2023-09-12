function luckyNumbers(matrix: number[][]): number[] {
    let lucky: number[] = new Array()
    let n = 0

    for (let i = 0; i < matrix[0].length; i++) {
        let max = 0
        let maxI = -1
        for (let j = 0; j < matrix.length; j++) {
            if (matrix[j][i] > max) {
                max = matrix[j][i]
                maxI = j
            }
        }
        for (let k = 0; k < matrix[0].length; k++) {
            if (max > matrix[maxI][k]) {
                max = 0
                break
            }

        }
        if (max != 0) {
            lucky[n] = max
            n++
        }
    }
    return lucky
}

let testMat = [[7, 8], [1, 2]]

console.log(luckyNumbers(testMat))
