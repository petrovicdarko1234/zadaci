function findLongestChain(pairs: number[][]): number {
    let pairsCnt = 1

    let matrix: number[][] = pairs.sort((a, b) => a[1] - b[1])
    let previus: number[] = matrix[0]

    for (let i = 1; i < matrix.length; i++) {
        let curent = matrix[i]
        if (curent[0] > previus[1]) {
            pairsCnt++
            previus = curent
        }
    }
    return pairsCnt

};
/*function sortMat(matrix: number[][]): number[][] {

let temp: number[] = new Array(2)

for (let i = 0; i < matrix.length - 1; i++) {
   for (let j = 1; j < matrix.length; j++) {
       if (matrix[i][1] > matrix[j][1]) {
           temp = matrix[i]
           matrix[i] = matrix[j]
           matrix[j] = temp
       }
   }
}
return matrix
}*/


let matTest = [[-10, -8], [8, 9], [-5, 0], [6, 10], [-6, -4], [1, 7], [9, 10], [-4, 7]]
console.log(findLongestChain(matTest))
