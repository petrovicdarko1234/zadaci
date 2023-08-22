function finalValueAfterOperations(operations: string[]): number {
    let x = 0
    for (let i = 0; i < operations.length; i++) {
        if (operations[i] == "--X" || operations[i] == "X--") {
            x -= 1
        }else{
            x += 1
        }
    }
    return x
};
let testString = ["--X", "X++", "X++"]

console.log(finalValueAfterOperations(testString))