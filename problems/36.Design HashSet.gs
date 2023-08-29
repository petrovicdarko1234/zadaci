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
let head: MyNode | null = new MyNode(1, null)
add(head, 2)

print(head)
head = remove(head, 2)

print(head)

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

let myHashSet = new MyHashSet();
myHashSet.add(1);      // set = [1]
myHashSet.add(2);      // set = [1, 2]
myHashSet.contains(1); // return True
myHashSet.contains(3); // return False, (not found)
myHashSet.add(2);      // set = [1, 2]
myHashSet.contains(2); // return True
myHashSet.remove(2);   // set = [1]
console.log(myHashSet.contains(2)); // return False, (already removed)