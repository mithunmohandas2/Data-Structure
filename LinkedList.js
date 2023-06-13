class Node {
    constructor(value) {
        this.value = value
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0
    }

    getSize() {
        return this.size
    }

    prepend(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++;
    }

    append(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node
        } else {
            let prev = this.head
            while (prev.next) {
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
    }

    print() {
        if (this.isEmpty()) {
            console.log("List is Empty")
        } else {
            let point = this.head
            let str = ""
            while (point) {
                str = str + " " + point.value
                point = point.next
            }
            console.log(str)
        }
    }

    insert(value, index) {
        if (index < 0 || index > this.size) {
            return "Invalid Index"
        }
        if (index === 0) {
            this.prepend(value)
        } else {
            const node = new Node(value);
            let curr = this.head
            for (let i = 0; i < index - 1; i++) {
                curr = curr.next
            }
            node.next = curr.next;
            curr.next = node
        }
        this.size++
    }

    search(value) {
        if (this.isEmpty()) {
            return "not value in list"
        }
        let curr = this.head
        let i = 0;
        while (curr) {
            if (curr.value === value) {
                return console.log("Found at : " + i)
            }
            curr = curr.next;
            i++
        }
        console.log("not found")
    }

    reverse() {
        if(this.isEmpty()) return "Empty List"
        if(this.size ===1){
            return this.head;
        }
        let pre=null;
        let curr =this.head
        while(curr){
            let post = curr.next
            curr.next=pre
            pre=curr
            curr=post
            
        }
        this.head=pre
    }


}

const list = new LinkedList();
list.prepend(10)
console.log(list.isEmpty())
list.prepend(9)
list.append(11)
console.log(list.getSize())
list.insert(3, 1)
list.print()
list.search(3)
list.reverse()
list.print()