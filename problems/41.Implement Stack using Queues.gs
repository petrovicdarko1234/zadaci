class MyNode {
    val: number
    next: MyNode | null
    constructor(value: number, nextEle: MyNode | null) {
        this.val = value
        this.next = nextEle
    }
}

function print(head: MyNode | null) {
    if (head != null) {
        while (head != null) {
            console.log(head.val)
            head = head.next
        }
    }
}
class MyStack {
    head: MyNode | null
    constructor() {
        this.head = null
    }

    push(x: number): void {
        this.head = new MyNode(x, this.head)
    }

    pop(): number {
        if (this.head != null) {
            let temp = this.head.val
            this.head = this.head.next
            return temp
        }
        return -1
    }

    top(): number {
        if (this.head != null) {
            return this.head.val
        }
        return -1
    }

    empty(): boolean {
        return this.head == null
    }
}
