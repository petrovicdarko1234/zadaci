function countDaysTogether(arriveAlice: string, leaveAlice: string, arriveBob: string, leaveBob: string): number {

    let ali365days: number[] = daysStaying(arriveAlice, leaveAlice)
    let bob365days: number[] = daysStaying(arriveBob, leaveBob)

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
function daysStaying(arrival: string, leave: string): number[] {
    let days: number[] = []
    let monArr: number = extractMonths(arrival)
    let dayArr: number = extractDays(arrival)
    let monLea: number = extractMonths(leave)
    let dayLea: number = extractDays(leave)
    let arr365 = dayOfYear(monArr, dayArr)
    let leave365 = dayOfYear(monLea, dayLea)

    for (let i = 0; i <= leave365 - arr365; i++) {
        days[i] = arr365 + i
    }
    return days
}
function extractDays(str: string): number {
    return parseInt(str.substring(3, 5))
}
function extractMonths(str: string): number {
    return parseInt(str.substring(0, 2))
}

console.log(countDaysTogether("08-15", "08-18", "08-16", "08-19"))
