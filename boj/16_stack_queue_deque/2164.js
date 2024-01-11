let input = Number(require("fs").readFileSync("/dev/stdin").toString().trim())

class Node {
    constructor(item) {
        this.item = item
        this.next = null
    }
}

class Queue {
    constructor() {
        this.head = null
        this.rear = null
        this.size = 0
    }
    
    push(item) {
        const node = new Node(item)
        
        if(!this.head) {
            this.head = node
            this.head.next = this.rear
        } else {
            this.rear.next = node
        }
        
        this.rear = node
        this.size++
    }
    
    pop() {
        if(this.size === 0) {
            return -1
        }
        
        if(this.size === 1) {
            const temp = this.head.item
            this.head = null
            this.size = 0
            this.rear = null
            
            return temp
        }
        
        const temp = this.head.item
        this.head = this.head.next
        
        if(this.size === 2) {
            this.rear = this.head
        }
        
        this.size--
        
        return temp
    }
    
}

let queue = new Queue

for(let i = 1; i <= input; i++) {
    queue.push(i)
}

while(queue.size > 1) {
    // 가장 위의 카드를 제거
    queue.pop()

    // 다음으로 가장 위에 있는 카드를 가장 밑으로 옮긴다.
    // head를 tail로..
    queue.rear.next = queue.head
    queue.rear = queue.head
    queue.head = queue.head.next
}

console.log(queue.head.item)