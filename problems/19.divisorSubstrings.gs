function divisorSubstrings(num: number, k: number): number {

    let str: string = num.toString()
    console.log(str)
    let counter = 0


    for (let i = 0; i <= str.length - k; i++) {
        let sub = str.substring(i, i + k)
        console.log(sub)
        let numSub: number = parseInt(sub)
        if (num % numSub == 0) {
            counter++
        }
    }

    return counter
};

console.log(divisorSubstrings(240, 2))