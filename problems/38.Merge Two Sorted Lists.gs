

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}


function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if (!list1) {
        return list2
    }
    if (!list2) {
        return list1
    }

    let tempHead = new ListNode
    let cur = tempHead

    while (list1 || list2) {
        if (!list1) {
            cur.next = list2
            break
        } else if (!list2) {
            cur.next = list1
            break
        } else if (list1.val < list2.val) {
            cur.next = list1
            list1 = list1.next
        } else {
            cur.next = list2
            list2 = list2.next
        }
        cur = cur.next
    }
    return tempHead.next
};