class MaxHeap {
    constructor() {
        this.heap = []
    }

    buildHeap(array) {
        this.heap = array;
        let n = array.length
        for (let i = Math.floor(n - 1 / 2); i >= 0; i--) {       // Start from the parent of the last leaf node and heapify all nodes in reverse order
            this.heapifyDown(i)
        }
    }

    heapifyDown(index) {
        let leftChildIndex = (2 * index) + 1
        let rightChildIndex = (2 * index) + 2
        let largestIndex = index;

        if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] > this.heap[largestIndex]) {
            largestIndex = leftChildIndex
        }
        if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] > this.heap[largestIndex]) {
            largestIndex = rightChildIndex
        }

        if (largestIndex !== index){
            this.swap(index,largestIndex)
            this.heapifyDown(largestIndex)
        }
    }

    swap(i,j){
        [this.heap[i],this.heap[j]] = [this.heap[j],this.heap[i]]
    }


    insert(value){
        this.heap.push(value);
        this.heapifyUp(this.heap.length-1)
    }

    heapifyUp(index){
        let parentIndex = Math.floor ((this.heap.length -1)/2)
        if(index>0 && this.heap[index]>this.heap[parentIndex]){
            this.swap(index,parentIndex)
            this.heapifyUp(parentIndex)
        }
    }

    remove(){
        if (this.heap.length===0){
            return "Underflow"
        }
        this.swap(0,this.heap.length-1)    // Swap the root node with the last node
        let popped = this.heap.pop()         // Remove the original root node
        this.heapifyDown(0)                 // Heapify down to restore the heap property
    }

    peek(){
        return console.log(this.heap[0])
    }

    display(){
        return console.log(this.heap)
    }
}

const heap = new MaxHeap()
let array = [2,4,5,7,3,1,8,9]
heap.buildHeap(array)
heap.display()