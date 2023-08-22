class ListNode {
    val: number
    next: ListNode | null

    constructor(v?: number, n?: ListNode) {
        this.val = (v === undefined ? 0 : v)

        if (n === undefined) {
            this.next = null
        } else {
            this.next = n
        }
    }
}

function create10ElemList(): ListNode {
    let head: ListNode = new ListNode()
    let last: ListNode = new ListNode()
    for (let i = 0; i < 10; i++) {
        let newNode: ListNode = new ListNode(i)

        if (i == 0) {
            head = newNode
            last = newNode
        } else {
            last.next = newNode
            last = newNode
        }
    }

    return head
}

function removeElem(head: ListNode, i: number): ListNode {
    let cur: ListNode | null = head
    let cnt = 0
    if (i == 0 && cur.next != null) {
        return cur.next
    }
    while (cur != null && cnt < i - 1) {
        cur = cur.next
        cnt++
    }
    if (cur != null && cur.next != null) {
        cur.next = cur.next.next
    }
    return head
}

function findVal(head: ListNode, i: number): number {
    let cur: ListNode | null = head
    let cnt = 0
    while (cur != null) {
        if (cur.val == i) {
            break
        }
        cur = cur.next
        cnt++
    }
    return cnt
}

function appendNewElem(head: ListNode, val: number) {
    let cur: ListNode | null = head
    while (cur.next != null) {
        cur = cur.next
    }
    cur.next = new ListNode(val)

}

function printList(head: ListNode) {
    let curr: ListNode | null = head
    while (curr != null) {
        console.log(curr.val)
        curr = curr.next
    }
}

function removeEleWithsV(head: ListNode, i: number): ListNode {
    let broj = findVal(head, i)
    head = removeElem(head, broj)
    return head
}

let head = create10ElemList()
//printList(list)

head = removeEleWithsV(head, 0)

printList(head)

appendNewElem(head, 10)

printList(head)

