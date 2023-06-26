//finding the closest value present in Binary Search Tree

class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert(value) {
        const node = new Node(value);
        if (this.root === null) {
            this.root = node
            return
        }
        let curr = this.root
        while (true) {
            if (value < curr.value) {
                if (curr.left === null) {
                    curr.left = node;
                    break;
                } else {
                    curr = curr.left
                }
            } else {
                if (curr.right === null) {
                    curr.right = node;
                    break;
                } else {
                    curr = curr.right
                }
            }
        }
    }

    contains(value) {
        if (this.root === null) return false
        let curr = this.root;
        while (curr !== null) {
            if (value < curr.value) {
                curr = curr.left
            } else if (value > curr.value) {
                curr = curr.right
            } else {
                return true;
            }
        }
        return false
    }

    findClosestValue(value) {
        if (this.contains(value)) return value;
        let pre = value - 1;
        let post = value + 1;
        while (true) {
            if (this.contains(pre)) {
                return pre;
            } else {
                pre--;
            }
            if (this.contains(post)) {
                return post;
            } else {
                post++;
            }
        }
    }
}

const bst = new BinarySearchTree()
bst.insert(50)
bst.insert(40)
bst.insert(20)
bst.insert(15)
bst.insert(55)
bst.insert(11)
bst.insert(99)
console.log(bst.contains(99))
console.log(bst.contains(100))
console.log(bst.findClosestValue(26))