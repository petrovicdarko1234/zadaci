function uniqueOccurrences(arr: number[]): boolean {

    let repetition = numRep(arr)

    for (let i = 0; i < repetition.length - 1; i++) {
        for (let j = i + 1; j < repetition.length; j++) {
            if (repetition[i] == repetition[j]) {
                return false

            }
        }
    }

    return true
};

function numRep(niz: number[]): number[] {
    let rep: number[] = []
    let k = 0
    const counted = 1001
    for (let i = 0; i < niz.length; i++) {

        if (niz[i] == counted) {
            continue
        }
        let count = 1
        for (let j = i + 1; j < niz.length; j++) {
            if (niz[i] == niz[j] && niz[i] != counted) {
                count++
                niz[j] = counted
            }
        }
        rep[k] = count
        k++
    }
    return rep
}

let testNiz = [1, 2]
console.log(testNiz)
console.log(numRep(testNiz))
console.log(uniqueOccurrences(testNiz))
