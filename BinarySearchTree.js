class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const node = new Node(value);
        if (this.root === null) {
            this.root = node
            return
        }
        let current = this.root
        while (true) {
            if (value < current.value) {
                if (current.left === null) {
                    current.left = node
                    break;
                } else {
                    current = current.left
                }
            } else {   //value >= current.value
                if (current.right === null) {
                    current.right = node
                    break;
                } else {
                    current = current.right
                }
            }
        }
    }

    contains(value) {
        let curr = this.root;
        while (curr != null) {
            if (value < curr.value) {
                curr = curr.left
            } else if (value > curr.value) {
                curr = curr.right
            } else {
                return true;
            }
        }
        return false;
    }

    delete(value) {
        this.root = this.deleteNode(this.root, value);
    }

    deleteNode(root, value) {
        if (root === null) return root;
        else if (value < root.value) {
            root.left = this.deleteNode(root.left, value)
        }
        else if (value > root.value) {
            root.right = this.deleteNode(root.right, value)
        }
        else { //value == root.value
            if (!root.left && !root.right) {
                root = null

            } else if (!root.left) {  //no  left node
                return root.right
            }
            else if (!root.right) {
                return root.left

            } else {  // have both left and right

                root.value = this.getmin(root.right)
                root.right = this.deleteNode(root.right, root.value)
            }
        }
        return root;
    }

    getmin(curr) {
        while (curr.left) {
            curr = curr.left
        }
        return curr.value
    }


    display() {
        this.postOrder(this.root)
    }

    postOrder(root) {
        console.log(root.value);
        if (root.left) this.postOrder(root.left)
        if (root.right) this.postOrder(root.right)
    }

}

const bst = new BinarySearchTree()
bst.insert(40)
bst.insert(22)
bst.insert(13)
bst.insert(65)
bst.insert(60)
bst.insert(28)
bst.insert(71)
bst.insert(87)
bst.insert(8)
bst.delete(65)
bst.delete(8)
console.log("Contains 60 : "+bst.contains(60))
console.log("Contains 100 : "+bst.contains(100))
bst.display()
