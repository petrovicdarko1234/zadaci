function countDaysTogether(arriveAlice: string, leaveAlice: string, arriveBob: string, leaveBob: string): number {

    let aliMonArr = parseInt(arriveAlice.substring(0, 2))
    let allDayArr = parseInt(arriveAlice.substring(3, 5))
    let aliMonLea = parseInt(leaveAlice.substring(0, 2))
    let allDayLea = parseInt(leaveAlice.substring(3, 5))
    let aliArr365: number = dayOfYear(aliMonArr, allDayArr)
    let aliLea365: number = dayOfYear(aliMonLea, allDayLea)
    let ali365days: number[] = daysStaying(aliArr365, aliLea365)

    let bobMonArr = parseInt(arriveBob.substring(0, 2))
    let bobDayArr = parseInt(arriveBob.substring(3, 5))
    let bobMonLea = parseInt(leaveBob.substring(0, 2))
    let bobDayLea = parseInt(leaveBob.substring(3, 5))
    let bobArr365: number = dayOfYear(bobMonArr, bobDayArr)
    let bobLea365: number = dayOfYear(bobMonLea, bobDayLea)
    let bob365days: number[] = daysStaying(bobArr365, bobLea365)

    let cnt = 0
    for (let i = 0; i < ali365days.length; i++) {
        for (let j = 0; j < bob365days.length; j++) {
            if (ali365days[i] == bob365days[j]) {
                cnt++
            }
        }
    }
    return cnt
};
function dayOfYear(month: number, day: number): number {
    let months: number[] = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    let days = 0

    for (let i = 0; i < month - 1; i++) {
        days += months[i]
    }
    return days = days + day
}
function daysStaying(arrival: number, leave: number): number[] {
    let days: number[] = []

    for (let i = 0; i <= leave - arrival; i++) {
        days[i] = arrival + i
    }
    return days
}

console.log(countDaysTogether("08-15", "08-18", "08-16", "08-19"))
