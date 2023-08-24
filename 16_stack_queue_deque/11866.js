// let input = require("fs").readFileSync("/dev/stdin").toString().trim()
let input = `7 3`.split(" ").map(v => +v)

// 원형큐 구현하는 문제인가?
// 큐와 다른 점은 head의 다음이 tail이라는거?

// 원형큐 안쓰는게 나을 것 같다.
// 그냥 중간에 하나를 빼면, 그 전 노드의 next값을 변경해주면 될 것 같음.

class Node {
    constructor(item) {
        this.item = item
        this.next = null
    }
}

class Queue {
    constructor(max, k) {
        this.head = null
        this.tail = null
        this.size = 0
        this.cap = max
        
        this.interval = k
        this.point = k
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
    
    // 중간에 있는 node를 제거할 것이므로 일반적인 큐와는 코드가 달라야함.
    // 제거할 node를 어떻게 찾지..?
    pop(n) {
        // head 확인 > 아니면 다음 노드 확인...
        // > 원하는 노드가 나올 때까지 반복
        // 별로 효율이 좋지 않을 것 같은데
        // head를 바꿔주는 식으로 할까?
        // 이것도 별 차이 없을 것 같기는 한데.. 
        
        const temp = this.head.item
        this.head = this.head.next
        
        if(this.size === 2) {
            this.tail = this.head
        }
        
        this.size--
        this.pointer(this.interval)
        
        return temp
    }
    
    pointer() {
        this.point = this.point + this.interval
        if(this.point > this.cap) {
            this.point = this.point-7
        }
    }
}

let queue = new Queue(input[0], input[1])

for(let i = 1; i <= input[0]; i++) {
    queue.push(i)
}

while(queue.size > 0) {
    
}