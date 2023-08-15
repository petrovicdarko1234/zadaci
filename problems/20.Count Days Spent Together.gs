function countDaysTogether(arriveAlice: string, leaveAlice: string, arriveBob: string, leaveBob: string): number {

    let Ama = parseInt(arriveAlice.substring(0, 2))
    let Ada = parseInt(arriveAlice.substring(3, 5))
    let Aml = parseInt(leaveAlice.substring(0, 2))
    let Adl = parseInt(leaveAlice.substring(3, 5))
    let Aaday: number = danUgodini(Ama, Ada)
    let Alday: number = danUgodini(Aml, Adl)
    let Adays: number[] = []

    for (let i = 0; i <= Alday - Aaday; i++) {
        Adays[i] = Aaday + i
    }

    let Bma = parseInt(arriveBob.substring(0, 2))
    let Bda = parseInt(arriveBob.substring(3, 5))
    let Bml = parseInt(leaveBob.substring(0, 2))
    let Bdl = parseInt(leaveBob.substring(3, 5))
    let Baday: number = danUgodini(Bma, Bda)
    let Blday: number = danUgodini(Bml, Bdl)
    let Bdays: number[] = []
    console.log(Baday, Blday)
    for (let i = 0; i <= Blday - Baday; i++) {
        Bdays[i] = Baday + i
    }

    let cnt = 0
    for (let i = 0; i < Adays.length; i++) {
        for (let j = 0; j < Bdays.length; j++) {
            if (Adays[i] == Bdays[j]) {
                cnt++
            }
        }
    }
    return cnt
};
function danUgodini(mesec: number, dan: number): number {
    let months: number[] = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    let dani = 0

    for (let i = 0; i < mesec - 1; i++) {
        dani += months[i]
    }
    return dani = dani + dan
}

console.log(countDaysTogether("08-15", "08-18", "08-16", "08-19"))
