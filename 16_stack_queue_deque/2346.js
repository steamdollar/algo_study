let input = require("fs").readFileSync("/dev/stdin").toString().trim()
.split("\n")

let N = +input[0]
let nums = input[1].split(" ").map(v => +v)

class Node {
    constructor(k, n) {
        this.turn = k
        this.item = n
        this.next = null
        this.prev = null
    }
}

class Deque {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }
    
    unshift(k, n) {
        
        const node = new Node(k, n)
        
        if(!this.head) {
            this.head = node
            this.tail = node
            this.size++
            return
        } 
        
        let temp = this.head
        this.head.prev = node
        this.head = node
        this.head.next= temp
        this.size++        
    }
    
    push(k, n) {
        const node = new Node(k, n)
        
        if(!this.head) {
            this.head = node
            this.tail = node
            this.size++
            return
        }
        
        let temp = this.tail
        this.tail.next = node
        this.tail = node
        this.tail.prev = temp
        this.size++        
    }
    
    shift() {
        if(!this.head) return 
        
        let item = this.head.item
        let turn = this.head.turn
        
        if(this.size === 1) {
            this.head = null
            this.tail = null
            this.size--
            
            return [item, turn]
        } else if (this.size === 2) {
            this.head = this.head.next
            this.head.next = null
            this.head.prev = null
            this.tail = this.head
            this.size--
            
            return [item, turn]

        } else {
            this.head = this.head.next
            this.head.prev = null
            this.size--
            return [item, turn]
        }
        
    }
    
    pop() {
        if(!this.head) return
        
        let item = this.tail.item
        let turn = this.tail.turn
        
        if(this.size === 1) {
            this.head = null
            this.tail = null
        } else if (this.size === 2) {
            this.tail = this.tail.prev
            this.tail.next = null
            this.tail.prev = null
            this.head = this.tail
            this.size--
            return [item, turn]
            
        } else {
            this.tail = this.tail.prev
            this.tail.next = null
            this.size--
            return [item, turn]
        }
    }
}

let deque = new Deque()
let ans = ""

for (let i = 0; i < nums.length; i++) {
    deque.push(i+1, nums[i])
}


let [nextNum, turn] = deque.shift()

ans += turn + " "

while(deque.size > 0) {
    if(nextNum > 0) {
        let count = 1
        while(true) {
            let temp = deque.head.item
            let turn = deque.head.turn
            
            deque.shift()
            if( count === nextNum ) {
                ans += turn + " "
                nextNum = temp
                break;
            }
            deque.push(turn, temp)
            count++
        }
    } else {
        let count = -1
        while(true) {
            let temp = deque.tail.item
            let turn = deque.tail.turn
            
            deque.pop()
            if (count === nextNum) {
                ans += turn + " "
                nextNum = temp
                break;
            }
            deque.unshift(turn, temp)
            count--
            
        }
    }
}

console.log(ans)

// 아이디어는 어렵지 않게 떠올렸는데
// shift를 다시 안 보고 구현하려다 잘못구현해서 한참 고생했다.
// 다시 deque를 구현해보는것도 좋을 듯

// 그런데 채점해보니 메모리 초과가 난다.
// 다른 사람들도 다 그런걸로 봐선 사이트쪽 문제인듯.
// 일단 이 문제는 넘어가고, 덱 구현 연습이나 한 번 더 해보자.