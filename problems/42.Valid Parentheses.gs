class MyNode {
    val: string
    next: MyNode | null
    constructor(value: string, nextEle: MyNode | null) {
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

    push(x: string): void {
        this.head = new MyNode(x, this.head)
    }

    pop(): string {
        if (this.head != null) {
            let temp = this.head.val
            this.head = this.head.next
            return temp
        }
        return "empty"
    }

    top(): string {
        if (this.head != null) {
            return this.head.val
        }
        return "empty"
    }

    empty(): boolean {
        return this.head == null
    }
}

function isValid(s: string): boolean {
    let stack = new MyStack()

    for (let i = 0; i < s.length; i++) {
        if (s[i] == ")") {
            if (stack.pop() != "(") {
                return false
            }
        } else if (s[i] == "]") {
            if (stack.pop() != "[") {
                return false
            }
        } else if (s[i] == "}") {
            if (stack.pop() != "{") {
                return false
            }
        } else {
            stack.push(s[i])
        }
    }
    return stack.empty()
};
let testNiz = "{[]}"

console.log(isValid(testNiz))