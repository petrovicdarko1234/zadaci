function distanceTraveled(mainTank: number, additionalTank: number): number {
    
    let main = mainTank
    let addi = additionalTank
    let dis = 0

    for (let i = 1; i <= main; i++) {
        dis += 10
        if (addi != 0 && i % 5 == 0) {
            main++
            addi--
        }
    }
    return dis
};

console.log(distanceTraveled(1, 2))