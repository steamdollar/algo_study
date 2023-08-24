// let input = require("fs").readFileSync("/dev/stdin").toString().trim()
let input=`15
push 1
push 2
front
back
size
empty
pop
pop
pop
size
empty
pop
push 3
empty
front`.split("\n")


// Node
class Node {
    constructor(item) {
        this.item = item
        this.next = null
    }
}

// Queue에는 맨 앞, 맨 뒤, size만 저장
// 각 노드들의 순서는 노드에 그 관계가 보관되어 있음
class Queue {
    constructor() {
        this.head = null
        this.rear = null
        this.size = 0
    }
    
    push(item){
        const node = new Node(item)
        
        // queue가 비어있을 경우
        // front에 node를 추가, 그 바로 다음은 rear가 됨.
        if(!this.head) {
            this.head = node
            this.head.next = this.rear
            
        // 비어있지 않는 경우
        // rear의 다음에 넣어주면 됨
        } else {   
            this.rear.next = node
        }
        
        // 비어있든 아니든, 새로 추가 된 node는 rear가 된다.
        this.rear = node;
        this.size += 1
    }
    
    // head를 제거
    pop() {
        if (this.size === 0) {
            return -1
        }
        
        // 요소가 하나뿐이라면 (head == tail이라면)
        if (this.size === 1) {
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
        this.size -= 1
        return temp
    }
    
    getSize() {
        return this.size
    }
    
    empty() {
        if(this.size === 0) {
            return 1
        } else {
            return 0
        }
    }
    
    front() {
        if(this.size === 0) {
            return -1
        }
        return this.head.item
    }
    
    back() {
        if (this.size === 0) {
            return -1
        }
        return this.rear.item
    }
}

let queue = new Queue

let ans = ""

for(let i = 1; i < input.length; i++) {
    // console.log(queue)
    // console.log("============")
    // console.log(input[i])

    
    let cmd = input[i].split(" ")
    if(cmd.length === 2) {
        queue.push(Number(cmd[1]))
        continue
    }
    
    // property와 method 이름이 겹치면 method 아니라고 에러난다..    
    switch (input[i]) {
    case "front" :
        ans += queue.front() + "\n"
        continue
    case "back" :
        ans += queue.back() + "\n"
        continue
    case "pop" :
        ans += queue.pop() + "\n"
        continue
    case "size" :
        ans += queue.getSize() + "\n"
        continue
    case "empty":
        ans += queue.empty() + "\n"
        continue
    }
}

console.log(ans)

// push와 opop의 예외적인 케이스를 처리하는게 되게 헷갈렸던 것 같음.
// 요소가 1개일떄, 0개일때, 2개일때..

// 요소가 1개인 경우를 처리하는 부분이 오래걸렸음.

// 이 경우 head == rear인건 맞는데,
// this.head, this.rear가 서로 연결 관계를 내포하지는 않게 됨.
// 원래는 같은 개체이므로..
// 그래서 this.head, this.rear를 동일한 node로 채워두되,
// next는 null로 남겨서 연결관계를 만들지는 않도록 했음.
// pop하는 경우도 동일하게 되도록 처리해야했는데,
// 이 아이디어를 떠올리는게 좀 걸렸다.