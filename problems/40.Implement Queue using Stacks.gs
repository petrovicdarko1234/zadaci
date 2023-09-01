class MyNode {
    next: MyNode | null
    val: number
    constructor(nextEle: MyNode | null, value: number) {
        this.next = nextEle
        this.val = value
    }
}

function add(head: MyNode | null, val: number): MyNode | null {
    if (head != null) {
        let cur = head
        while (cur.next != null) {
            cur = cur.next
        }
        cur.next = new MyNode(null, val)
    } else {
        head = new MyNode(null, val)
    }

    return head
}


function print(head: MyNode | null) {
    let cur = head
    while (cur !== null) {
        console.log(cur.val)
        cur = cur.next
    }
}

function remove(head: MyNode | null): MyNode | null {
    if (head !== null) {
        let newHead = head.next
        head.next = null //good practise so memory can be free
        return newHead
    }
    return null
}

class MyQueue {
    head: MyNode | null
    tail: MyNode
    constructor() {
        this.head = null
        this.tail = new MyNode(null, 1) //magic for no null :)
    }

    push(x: number): void {
        if (this.head == null) {
            this.tail = new MyNode(null, x)
            this.head = this.tail
        } else {
            this.tail.next = new MyNode(null, x)
            this.tail = this.tail.next
        }
    }

    pop(): number {
        if (this.head !== null) {
            let temp = this.head.val
            this.head = remove(this.head)
            return temp
        }
        return -1
    }

    peek(): number {
        if (this.head !== null) {
            return this.head.val
        }
        return -1
    }

    empty(): boolean {
        return this.head == null
    }
}