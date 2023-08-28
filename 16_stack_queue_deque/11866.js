let input = require("fs").readFileSync("/dev/stdin").toString().trim()
.split(" ").map(v => +v)

class Node {
    constructor(item) {
        this.item = item
        this.next = null
    }
}

class Queue {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }
    
    push(item) {
        const node = new Node(item)
        
        if(this.size === 0) {
            this.head = node
            this.head.next = this.tail
        } else {
            this.tail.next = node
        }
        this.tail = node
        this.size++
    }
    

    pop() {
        
        const temp = this.head.item
        this.head = this.head.next
        
        if(this.size === 2) {
            this.tail = this.head
        }
        
        this.size--
        
        return temp
    }
    

}

let ans = []

let queue = new Queue(input[0], input[1])

for(let i = 1; i <= input[0]; i++) {
    queue.push(i)
}

let turn = 1
while(queue.size > 0) {
    // 일단 head를 뺀다.
    let temp = queue.pop()
    
    // 아직 k만큼 뒤로 가지 못했으면 그냥 다시 제일 뒤로 돌려줌
    if(turn < input[1]) {
        queue.push(temp)
        turn++
    } else {
        ans.push(temp)
        turn = 1
    }
}

console.log(`<${ans.join(", ")}>`)

// 원형 큐를 구현해야 하나 하고 혼자 너무 복잡하게 생각했다.
// 큐의 개념만 조금 응용하면 되는 문제였다.
// 그냥 빼서 확인하고 아니면 뒤에 넣어주면 되잖아..