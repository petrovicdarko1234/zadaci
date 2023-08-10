function deleteGreatestValue(grid: number[][]): number {

    let zbir = 0
    let m = grid.length
    let n = grid[0].length

    for (let i = 0; i < n; i++) {
        let maksimum = 0
        for (let j = 0; j < m; j++) {
            let nesto = uporedi(grid[j])
            if (nesto > maksimum)
                maksimum = nesto

        }
        zbir += maksimum
    }

    return zbir
};



function uporedi(niz: number[]): number {

    let max = 0
    let index = 0

    for (let i = 0; i < niz.length; i++)
        if (niz[i] > max) {
            max = niz[i]
            index = i
        }
    niz[index] = 0

    return max
}

let testNiz = [[1, 2], [1, 2, 3]]
console.log(deleteGreatestValue(testNiz))
