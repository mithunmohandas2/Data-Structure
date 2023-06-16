class Stack {
    constructor() {
        this.item = []
    }

    isEmpty() {
        return this.item.length === 0
    }

    sizeOf() {
        return this.item.length
    }

    push(value) {
        this.item.push(value)
    }

    pop() {
        return this.item.pop();
    }

    display() {
        console.log(this.item.toString())
    }

    peek() {
        return this.item[this.item.length - 1]
    }

    search(value) {
        for (let i = 0; i < this.item.length; i++) {
            if (this.item[i] === value) {
                return console.log("value found at index : " + i)
            }
        }
        return console.log("value not found")
    }

}

const stk = new Stack();
//operations
stk.push(20);
stk.push(10)
stk.push(40)
console.log(stk.isEmpty())
stk.display()
stk.pop()
stk.display()
console.log(stk.peek())
console.log(stk.sizeOf())
stk.search(110)
stk.search(10)