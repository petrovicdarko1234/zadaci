function plusOne(digits: number[]): number[] {

    let n = digits.length - 1
    for (let i = n; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i] += 1
            return digits
        }
        else {
            digits[i] = 0
        }
    }
    if (digits[0] == 0) {
        return [1, ...digits]
    }
    return digits


};

let testNiz = [9, 9]
console.log(plusOne(testNiz))

