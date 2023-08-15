function pi(ponavljanja: number): number {
    let krug: number = 0

    for (let i = 0; i < ponavljanja; i++) {
        let a = Math.random()
        let b = Math.random()

        if (test(a, b) <= 1) {
            krug++

        }
    }

    return (4.0 * krug) / (ponavljanja * 1.0)
}
function test(num1: number, num2: number) {
    let dijagonala = Math.sqrt(Math.pow(num1, 2) + Math.pow(num2, 2))

    return dijagonala
}

console.log(pi(100000000))