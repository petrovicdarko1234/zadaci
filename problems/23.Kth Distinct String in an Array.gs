function kthDistinct(arr: string[], k: number): string {
    let visited: boolean[] = distinct(arr)
    let strings: string[] = []
    let n = 0

    for (let i = 0; i < arr.length; i++) {
        if (!visited[i]) {
            strings[n] = arr[i]
            n++
        }
    }

    if (k <= strings.length) {
        return strings[k - 1]
    }
    return ""
};
function distinct(arr: string[]): boolean[] {

    let visited: boolean[] = new Array(arr.length)
    visited.fill(false)

    for (let i = 0; i < arr.length - 1; i++) {
        if (!visited[i]) {

            for (let j = i + 1; j < arr.length; j++) {
                if (arr[i] == arr[j]) {
                    visited[i] = true
                    visited[j] = true

                }
            }
        }
    }
    return visited
}
let testString = ["d", "b", "c", "b", "c", "a"]

console.log(distinct(testString))
console.log(kthDistinct(testString, 2))