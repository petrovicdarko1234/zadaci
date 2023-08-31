class MyNode {
    key: number
    val: number
    next: MyNode | null

    constructor(key: number, value: number, nextElem: MyNode | null) {
        this.val = value
        this.next = nextElem
        this.key = key
    }
}

function add(head: MyNode, key: number, val: number) {
    let cur = head

    while (cur.next != null) {
        cur = cur.next
    }
    cur.next = new MyNode(key, val, null)
}

function print(head: MyNode | null) {
    let cur: MyNode | null = head
    while (cur != null) {
        console.log(cur.key, cur.val)
        cur = cur.next
    }
}

function find(head: MyNode | null, key: number): number {
    let cur: MyNode | null = head
    while (cur != null) {
        if (cur.key == key) {
            return cur.val
        }
        cur = cur.next
    }
    return -1
}
function remove(head: MyNode, key: number): MyNode | null {
    if (head.key == key) {
        let newHead = head.next
        head.next = null //good practise so memory can be free
        return newHead
    }

    let cur: MyNode | null = head
    while (cur.next != null) {
        if (cur.next.key == key) {
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
function findNode(head: MyNode | null, key: number): MyNode | null {
    let cur: MyNode | null = head
    while (cur != null) {
        if (cur.key == key) {
            return cur
        }
        cur = cur.next
    }
    return null
}


class MyHashMap {
    head: MyNode | null = null

    constructor() {
        this.head = null
    }

    put(key: number, value: number): void {
        if (this.head != null) {
            if (this.get(key) == -1) {
                add(this.head, key, value)
            } else {
                let node = findNode(this.head, key)
                if (node !== null) {
                    node.val = value
                }
            }
        } else {
            this.head = new MyNode(key, value, null)
        }
    }

    get(key: number): number {
        return find(this.head, key)
    }

    remove(key: number): void {
        if (this.head != null) {
            this.head = remove(this.head, key)
        }
    }
}

let map = new MyHashMap()
map.put(1, 0)
console.log(map.get(1))
map.remove(1)
console.log(map.get(1))
map.put(2, 1)
console.log(map.get(2))
map.remove(2)
console.log(map.get(2))
map.put(4, 3)
map.put(5, 4)
map.put(6, 5)
map.put(7, 6)
console.log(map.get(3))
console.log(map.get(4))
console.log(map.get(5))
console.log(map.get(6))
console.log(map.get(7))
map.put(1, 1)
console.log(map.get(1))



