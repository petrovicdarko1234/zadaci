function generate(numRows: number): number[][] {

    let matrix: number[][] = []

    for (let i = 0; i < numRows; i++) {
        matrix[i] = []
        for (let j = 0; j < i + 1; j++) {
            matrix[i][j] = 1
        }
    }

    for (let i = 2; i < numRows; i++) {
        for (let j = 1; j < i; j++) {
            matrix[i][j] = matrix[i - 1][j - 1] + matrix[i - 1][j]

        }
    }
    return matrix
};

function printMatrix(matrix: number[][]): string {
    let str: string = ""
    for (let i = 0; i < matrix.length; i++) {
        for (let k = Math.round(matrix.length / 2) - i; k >= 0; k--) {
            str = str + " "
        }
        for (let j = 0; j < matrix[i].length; j++) {
            str = str + matrix[i][j] + " "
        }
        str = str + "\n"
    }
    return str
}
console.log(printMatrix(generate(5)))