class Node {
    constructor() {
        this.children = {}
        this.isEndOfWord = false
    }
}

class Tries {
    constructor() {
        this.root = new Node();
    }

    insert(word) {
        let curr = this.root
        for (let i = 0; i < word.length; i++) {
            let char = word[i]
            if (!curr.children[char]) {
                curr.children[char] = new Node();
            }
            curr = curr.children[char]
        }
        curr.isEndOfWord = true;
    }

    search(word) {
        let curr = this.root
        for (let i = 0; i < word.length; i++) {
            let char = word[i]
            if (!curr.children[char]) {
                return false
            }
            curr = curr.children[char]
        }
        return curr.isEndOfWord
    }

    prefix(pre) {
        let curr = this.root
        for (i = 0; i < pre.length; i++) {
            let char = pre[i]
            if (!curr.children[char]) {
                return false
            }
            curr = curr.children[char]
        }
        return true
    }

}

const tri = new Tries()
tri.insert("apple")
tri.insert("ball")
tri.insert("cat")
tri.insert("door")
tri.insert("elephant")

console.log(tri.search("ball"))
console.log(tri.search("car"))