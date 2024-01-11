let input = require("fs").readFileSync("/dev/stdin").toString().trim()
.split("\n")

// 1 X: 정수 X를 덱의 앞에 넣는다. (1 ≤ X ≤ 100,000)
// 2 X: 정수 X를 덱의 뒤에 넣는다. (1 ≤ X ≤ 100,000)
// 3: 덱에 정수가 있다면 맨 앞의 정수를 빼고 출력한다. 없다면 -1을 대신 출력한다.
// 4: 덱에 정수가 있다면 맨 뒤의 정수를 빼고 출력한다. 없다면 -1을 대신 출력한다.
// 5: 덱에 들어있는 정수의 개수를 출력한다.
// 6: 덱이 비어있으면 1, 아니면 0을 출력한다.
// 7: 덱에 정수가 있다면 맨 앞의 정수를 출력한다. 없다면 -1을 대신 출력한다.
// 8: 덱에 정수가 있다면 맨 뒤의 정수를 출력한다. 없다면 -1을 대신 출력한다.

class Node {
    constructor(item) {
        this.item = item
        this.next = null
        this.prev = null
    }
}

// 덱은 앞 뒤를 다 연결해서 뺄 수 있어야 하는데..
// 제한 시간 2s인걸로 봐서 배열 쓰는건 안될 것 같음..
// 우선 예외적인 케이스는 나중에 생각하고 일반적인 동작부터 구현해보자.
// 괜히 한 번에 하려니까 스탭 너무 꼬임.
class Deque {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }
    
    // 앞에 el 추가
    // head를 대체하고 새 노드의 next를 원래 head로 맞춰준다.
    func1(n) {
        const node = new Node(n)
        
        if(!this.head) {
            this.head = node
            this.tail = node
            this.size++
            return
        }
        
        let temp = this.head
        this.head.prev = node
        this.head = node
        this.head.next = temp
        this.size++
    }
    
    // 뒤에 el 추가
    // tail을 대체, 원래 tail의 next를 새 노드로 교체
    func2(n) {
        const node = new Node(n)
        
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
    
    // 앞쪽의 item을 제거, 출력
    func3() {
        if(this.size === 0) {
            return -1
        } else if (this.size === 1) {
            let temp = this.head.item
            this.head = null
            this.tail = null
            this.size--
            
            return temp
        } else if(this.size === 2) {
            let temp = this.head.item
            this.head = this.head.next
            this.head.next = null
            this.head.prev = null
            this.tail = this.head
            this.size--
            return temp
        }
        
        let temp = this.head.item
        this.head = this.head.next
        this.head.prev = null
        this.size--
        
        return temp
    }
    
    // 뒤쪽 아이템을 제거, 출력
    // tail replace를 어떻게 구현할까..
    // 원 tail 이전의 node를 tail로 바꿔야 하는데..
    // 이걸 하려면 node에 next말고 prev를 추가해야할 것 같은데..
    func4() {
        if (this.size === 0) {
            return -1
        } else if (this.size === 1) {
            let temp = this.head.item
            this.head = null
            this.tail = null
            this.size--
            
            return temp
        } else if (this.size === 2) {
            let temp = this.tail.item
            this.tail = this.tail.prev
            this.tail.next = null
            this.tail.prev = null
            this.head = this.tail
            this.size--
            return temp
        }
        
        let temp = this.tail.item
        this.tail = this.tail.prev
        this.tail.next = null
        
        this.size--
        
        return temp
    }
    
    func5() {
        return this.size
    }
    
    func6() {
        if(this.size === 0) {
            return 1
        } else {
            return 0
        }
    }
    
    func7() {
        if(this.size === 0) {
            return -1
        } else {
            return this.head.item
        }
    }
    
    func8() {
        if(this.size === 0) {
            return -1
        } else {
            return this.tail.item
        }
    }
    
}

let ans = ""

let deque = new Deque()

for(let i = 1; i < input.length; i++) {
    let len = input[i].split(" ").map(v => +v)
    if(len.length === 2) {
        switch (len[0]) {
        case 1:
            deque.func1(len[1])
            continue
        case 2:
            deque.func2(len[1])
            continue
        }
    } else {
        switch (len[0]) {
        case 3:
            ans += deque.func3() + "\n"
            continue
        case 4:
            ans += deque.func4() + "\n"
            continue
        case 5:
            ans += deque.func5() + "\n"
            continue
        case 6:
            ans += deque.func6() + "\n"
            continue
        case 7:
            ans += deque.func7() + "\n"
            continue
        case 8: 
            ans += deque.func8() + "\n"
            continue
        }
    }   
    
}

console.log(ans)

// deque는 노드에 이전 노드, 이후 노드에 관한 정보도 필요하다..
// 뒤에서부터 뺄 수도 있으니까..
// 그 구현방식은 head만 tail로, next만 prev로 바꿔주면 되서 어렵지 않다.

// 적어도 내 이 풀이에 있는 모든 조건 분할 (size = 2, size ==1, ) 케이스는
// 노드가 1개만 있는 경우 전 후 관계를 어떻게 처리할것인가 하는 문제에서 출발한다.
// 일반적으로 어떻게 하는지는 몰라도 나는 deque의 head, tail을 같게 하되,
// this.head, this.tail의 관계는 설정하지 않는 식으로 처리했고,
// 지금까진 문제가 없었음.