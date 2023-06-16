class Queue{
    constructor(){
        this.items=[]
    }

    enqueue(element){
        this.items.push(element)
    }

    dequeue(){
        return this.items.shift()
    }

    isEmpty(){
        return this.items.length===0
    }

    peek(){
        if(this.isEmpty())return null
        return this.items[0]
    }

    size(){
        return this.items.length
    }

    print(){
       console.log(this.items.toString())
    }
}

const q= new Queue;
q.enqueue(4)                   // add value to queue
console.log(q.isEmpty())   // check if its empty/not
q.enqueue(20)
q.enqueue(30)
q.print()                   // display all queue
q.dequeue()                    // remove value
console.log(q.size())       //return size of Queue
console.log(q.peek())       // displays 1st element without removing
q.print()