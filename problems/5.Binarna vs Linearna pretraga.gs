function linearna(niz: number[], target: number): number {
    let index = -1
    for (let i = 0; i < niz.length; i++) {
        if (target == niz[i]) {
            index = i
        }
    }
    return index
}




function sortiraj(niz: number[]): number[] {
    let nesto = 0
    for (let i = 0; i < niz.length - 1; i++) {
        for (let j = i + 1; j < niz.length; j++) {
            if (niz[i] > niz[j]) {
                nesto = niz[j]
                niz[j] = niz[i]
                niz[i] = nesto
            }
        }
    }
    return niz
}



function generisiNiz(): number[] {
    let niz: number[] = new Array(100000)

    for (let i = 0; i < niz.length; i++) {
        niz[i] = getRandom(1, 100000)
    }

    return niz

}


//Math. floor(Math. random() (max - min + 1) + min)

function getRandom(min: number, max: number): number {

    let broj = Math.floor(Math.random() * (max - min + 1) + min)

    return broj

}

function searchInsert(nums: number[], target: number): number {
    if (target < nums[0]) {
        return 0
    }

    if (nums[0] == target) {
        return 0
    }

    if (target > nums[nums.length - 1]) {
        return nums.length
    }

    let start = 0
    let end = nums.length - 1
    while (end - start > 1) {
        let halfIndex = start + Math.round((end - start) / 2)
        let halfVal = nums[halfIndex]

        if (target > halfVal) {
            start = halfIndex
        }
        else {
            end = halfIndex
        }

    }

    return end
}

let niz = generisiNiz()

const pocetak = new Date().getTime();
for (let i = 0; i < 1000000; i++) {
    let target = getRandom(1, 100000)
    linearna(niz, target)

}


let kraj = new Date().getTime() - pocetak;

const start = new Date().getTime();
sortiraj(niz)
// Run some code..
for (let i = 0; i < 1000000; i++) {
    let brojka = getRandom(1, 100000)
    searchInsert(niz, brojka)

}


let elapsed = new Date().getTime() - start;

console.log("binarno:", elapsed)
console.log("linearna:", kraj)

