class MyNode {
    val: number
    next: MyNode | null

    constructor(value: number, nextElem: MyNode | null) {
        this.val = value
        this.next = nextElem
    }
}

function add(head: MyNode, val: number) {
    let cur = head

    while (cur.next != null) {
        cur = cur.next
    }
    cur.next = new MyNode(val, null)
}

function print(head: MyNode | null) {
    let cur: MyNode | null = head
    while (cur != null) {
        console.log(cur.val)
        cur = cur.next
    }
}

function find(head: MyNode | null, val: number): boolean {
    let cur: MyNode | null = head
    while (cur != null) {
        if (cur.val == val) {
            return true
        }
        cur = cur.next
    }
    return false
}
function remove(head: MyNode, val: number): MyNode | null {
    if (head.val == val) {
        let newHead = head.next
        head.next = null //good practise so memory can be free
        return newHead
    }

    let cur: MyNode | null = head
    while (cur.next != null) {
        if (cur.next.val == val) {
            break
        }
        cur = cur.next
    }
    if (cur.next != null) {
        let removed = cur.next
        cur.next = cur.next.next
        removed.next = null //for memory good practise to do, not related to logic
    }
    return head
}

class MyHashSet {
    head: MyNode | null
    constructor() {
        this.head = null
    }

    add(key: number): void {
        if (this.head != null) {
            if (!this.contains(key)) {
                add(this.head, key)
            }
        } else {
            this.head = new MyNode(key, null)
        }
    }

    remove(key: number): void {
        if (this.head != null) {
            this.head = remove(this.head, key)
        }
    }

    contains(key: number): boolean {
        return find(this.head, key)
    }
}

let head: MyNode = new MyNode(1, null)

add(head, 2)
add(head, 2)
add(head, 1)
add(head, 2)

function findDups(head: MyNode) {
    let elem1 = head
    while (elem1.next != null) {
        let elem2: MyNode | null = elem1.next
        while (elem2 != null) {
            if (elem1.val == elem2.val) {
                console.log(elem2.val)
                break
            }
            elem2 = elem2.next
        }
        elem1 = elem1.next
    }
}

//findDups(head)

function findDupsMyHashSet(head: MyNode | null) {
    let set = new MyHashSet()

    while (head != null) {
        if (set.contains(head.val)) {
            console.log(head.val)
        }
        set.add(head.val)
        head = head.next
    }

}
//findDupsMyHashSet(head)

function findDupsHashSet(head: MyNode | null) {
    const set = new Set<number>();

    while (head != null) {
        if (set.has(head.val)) {
            console.log(head.val)
        }
        set.add(head.val)
        head = head.next
    }
}

findDupsHashSet(head)