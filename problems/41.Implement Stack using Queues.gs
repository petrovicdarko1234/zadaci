class MyNode {
    val: number
    next: MyNode | null
    constructor(value: number, nextEle: MyNode | null) {
        this.val = value
        this.next = nextEle
    }
}

function add(val: number, head: MyNode | null): MyNode {
    if (head !== null) {
        let cur = head
        while (cur.next !== null) {
            cur = cur.next
        }
        cur.next = new MyNode(val, null)
    } else {
        head = new MyNode(val, null)
    }
    return head
}
function print(head: MyNode | null) {
    let cur = head
    while (cur != null) {
        console.log(cur.val)
        cur = cur.next
    }
}

function remove(head: MyNode | null): MyNode | null {
    if (head == null) {
        return null
    }
    if (head.next == null) {
        return null
    }
    if (head.next.next == null) {
        head.next = null
    }
    if (head != null) {
        let cur = head
        if (cur.next != null && cur.next.next != null) {
            while (cur.next?.next != null) {
                cur = cur.next
            }
            cur.next = null
        }
        return head
    } else {
        return null
    }
}
function onTop(head: MyNode | null): number {
    let cur = head
    if (cur != null) {
        while (cur.next != null) {
            cur = cur.next
        }
    }

    if (cur != null) {
        return cur.val
    } else {
        return -1
    }

}

class MyStack {
    head: MyNode | null
    constructor() {
        this.head = null
    }

    push(x: number): void {
        this.head = add(x, this.head)
    }

    pop(): number {
        let temp = onTop(this.head)
        this.head = remove(this.head)
        return temp
    }

    top(): number {
        if (this.head != null) {
            return onTop(this.head)
        } else {
            return -1
        }
    }

    empty(): boolean {
        return this.head == null
    }
}

// let head = null

// head = add(1, null)

// add(2, head)
// add(3, head)
// add(4, head)
// print(head)
// console.log(onTop(head))
// head = remove(head)
// print(head)
// console.log(onTop(head))
// /**
