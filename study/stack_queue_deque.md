# 큐, 스텍, 덱

큐, 스텍, 덱 자료 구조에 대해 알아보자.

js에 빌트인 된건 없지만 배열이랑 이 배열에 사용할 수 있는

method 몇 가지를 통해 어렵지 않게 구현할 수 있음

##
## 1. stack
한 쪽 끝에서만 자료를 넣고 빼는 작업이 이루어지는 자료 구조이다.
LIFO (last in first out) 방식으로 사용되고, 
가장 최근에 스택에 삽입된 자료의 위치를 보통 top이라고 한다.

top 이외의 자료구조에는 접근이나 수정 모두 불가능하다.

top에는 반드시 처음 접근하므로 시간 복잡도는 O(1)

top을 빼는 것을 pop, 새로운 자료를 추가하는 것을 push라고 함.

stack이 비어있을 때 pop을 시도하는 것을 stack underflow, 

stack이 가득 찻을 때 push를 시도하는 것을 stack overflow라고 한다.

보통 여러 depth의 함수를 호출하면 이렇게 된다.

``` js
    class Stack {
        constructor() {
            this.items = []
        }
        
        // 배열에 element 추가
        push(el) {
            this.items.push(el)
        }
        
        // 배열의 마지막 요소 제거
        pop(el) {
            return this.items.pop()
        }
        
        // top의 요소 확인
        peek() {
            return this.items[this.items.length - 1]
        }
        
        // stack이 비어있는지 확인
        isEmpty() {
            return this.items.length === 0
        }
        
        // 현재 stack 내부에 존재하는 data 갯수 
        size() {
            return this.items.length;
        }
    }    
```

##
## 2. Queue
양 쪽 끝에서 각각 데이터의 삽입, 삭제가 이루어진다.
FIFO(first in first out)으로 동작하며,

데이터가 추가되는 곳을 rear, 빠져나오는 곳을 front라고 부른다.

i) linear queue
선형 배열을 사용해 구현된 큐.

삽입을 위해서는 요소들을 계속 이동시켜줘야 한다.

시간 복잡도 클 것 같은데..

front, rear는 증가만 하는 방식으로, front 앞쪽에 공간이 있을 수도 있다.


``` js

    // stack까진 pop, push가 O(1)이라 js에서 이렇게 해도 되는데
    // queue부터는 안됨. 앞에서 데이터를 조작하면
    // js에서 shift, unshift는 O(n)이라 시간초과나기 십상이다.
    class Queue {
        constructor {
            this.items = []
        }
        
        // queue에 요소 추가
        enqueue(el) {
            this.items.push(el)
        }
        
        // queue에서 첫 요소 제거
        dequeue() {
            return this.items.shift()
        }
        
        // front의 요소 반환
        front() {
            return this.items[0]
        }
        
        // queue가 비었는지 확인
        isEmpty() {
            return this.items.length === 0
        }
        
        // queue의 size 확인
        size() {
            return this.items.length
        }
    }
```

``` js
    // 각 데이터를 저장할 node를 만들고,
    // 이 노드들중 필수적인 것들만 큐에 정보로 저장한다.
    class Node {
        constructor(n) {
            this.item = n
            this.next = null
        }     
    }
    
    class Queue {
        constructor() {
            this.head = null
            this.tail = null
            this.size = 0
        }
        
        // queue의 뒤쪽에 data를 추가
        push(n) {
            
        }
        
        // queue의 앞 쪽에서 data를 추출, 제거
        shift() {
            
        }
        
    }
    
```

ii) circular queue
선형큐의 단점을 보완한 형태. queue의 요소를 빈번하게 추가/제거 해야할 때 사용한다.

- head : queue의 시작점을 지정하는 pointer(or index)
이 곳에서 요소들이 제거되며, 요소가 제거될 경우, head pointer는 queue의 다음 요소로 이동한다.
원형 큐에서 head 포인터가 배열의 끝에 도달하고 배열의 시작 부분에 빈 슬롯이 있는 경우, 
배열의 시작점으로 돌아온다. (wrap 된다고 함)

- tail : queue의 끝을 지정하는 pointer
정확히 말하면 다음 element가 삽입될 위치를 의미한다.
요소가 큐에 들어올 경우, tail pointer는 다음 빈 slot으로 이동한다.
head와 마찬가지로 배열의 끝에 도달하고, 시작점에 빈 slot이 있을 경우 배열의 처음으로 돌아온다.

//

- enqueue : 데이터 삽입 시, 추가되는 데이터는 tail에 의해 지정되는 위치로 들어온다.
그 후, tail은 이동하거나, 처음으로 돌아간다. 
tail이 head와 동일한 위치에 도달하고 queue가 가득 찬 경우 overflow가 일어난다.

- dequeue : 요소를 제거할 때, head가 지정하는 요소가 제거되며, head는 이동하거나 처음으로 돌아간다.
head가 tail과 동일한 위치에 도달했고, queue가 비었다면 underflow 상태가 된다.

- wrapping : size N의 원형 큐에서 wrapping이 일어나는 경우는 다음과 같다.

``` js
    pointer = (pointer + 1) % N
```

왜 굳이 나머지 연산자냐,

일단 queue의 size보다 pointer가 커지면 안되고, 
(일정 범위내에서 움직여야 하고)

끝부분에서 처음으로 돌아가야 하기 때문.

``` js
    class CircularQueue {
        // 원형 큐는 초기에 지정해줄 속성값이 많다.
        // 일단 최대 크기가 고정되어 있음
        constructor(size) {
            this.queue = new Array(size)
            this.head = 0
            this.tail = 0
            
            // size는 큐의 최대 크기, length는 현재 크기
            this.size = size
            this.length = 0
        }
        
        enqueue(v) {
            
            // queue가 이미 다 차있는 경우 enqueue 불가
            if(this.isFull()) {
                console.log("queue is full")
                return false
            }
            
            // tail 부분에 값을 추가
            this.queue[this.tail] = value;
            
            // tail을 한 칸 뒤로 옮겨준다.
            this.tail = (this.tail + 1) % this.size
            
            // length를 업데이트
            this.length++
        }
        
        dequeue() {
            
            // queue가 이미 비어 있는 경우 dequeue 불가
            if(this.isEmpty()) {
                console.log("queue is empty")
                return false
            }
            
            // 제거된 값
            const removedValue = this.queue[this.head]
            
            // head를 뒤로 한 칸 민다. (맨 앞의 요소가 제거되었으므로)
            this.head = (this.head + 1) % this.size
            this.length--
            
            return removedValue
        }
        
        isFull() {
            return this.length === this.size
        }
        
        isEmpty() {
            return this.length === 0
        }
        
        // 전체 요소 출력
        print() {
            let result = ''
            for(let i = 0; i < this.length; i++) {
                result += this.queue[(this.head + 1) % this.size] + ' ';
            }
            console.log(result)
        }
    }
```


//

front, rear의 위치로 데이터 삽입, 삭제가 바로 이루어지므로 
시간복잡도는 O(1)

중간에 위치한 데이터는 접근할 수 없다.

##
## 3. Deque (Double Ended Queue)
양쪽 front, rear에서 모두 데이터 접근, 수정이 가능한 자료구조.

연속적인 메모리를 점유하고, 선언 이후 크기를 바꿀 수도 있음.

다른 요소들을 앞, 뒤로 밀어내고 중간에 데이터를 삽입하는 것도 가능하다.
(성능이 가장자리에 삽입하는것보다는 떨어지긴 함)

데이터 탐색, 수정 모두 O(1)의 시간 복잡도를 가진다.

이 친구는 tail을 빼고 그 앞의 (n-1)th node를 tail로 만들어야 하는 경우가 있어

node에 다음 노드 정보만 있는게 아니라, 이전 노드의 정보도 필요하다.

덱과 큐를 공부하면서 생각났던건

노드가 1개일 때의 예외 케이스를 어떻게 처리해야 하는지를

주의해야 고장이 안나는 덱을 구현할 수 있다는 것이었다.

1. 노드가 1개일때 그 노드의 next, prev는 어떻게 처리해줘야 하나?

그 노드를 담는 덱의 head, tail은 어떻게 지정해야 하는가?

특히 덱에 노드가 2개이고 여기서 하나를 빼서 덱의 총 노드 수가 1개가 되는 경우,

덱에서 head, tail은 각각 뭘로 지정해줘야 하는가?

그 head와 tail의 관계는 어떻게 정의하는가?

이 부분만 주의하면 된다.



나는 덱의 head도, tail도 그 노드가 되지만 

그 head와 tail은 동일한 노드이고, 따라서 전후관계가 없으므로

head와 tail의 연결 관계는 없게 하는 식으로 처리헀다.

즉 deque.head.next, deque.tail.prev 모두 null로 지정한다.


``` js

    // data를 저장하는 각 node들
    class Node {
        constructor(n) {
            this.item = n
            this.prev = null
            this.next = null
        }
    }
    
    class Deque {
        constructor() {
            // 노드 간의 순서, 연결 관계는
            // 노드들 안에 이미 포함되어 있으므로
            // 덱은 head, tail 정보만 알면 된다.
            this.head = null
            this.tail = null
            this.size = 0
        }
        
        // deque의 앞쪽에 데이터를 추가
        unshift(n) {
            const node = new Node(n)
            
            // head가 없다는건 덱에 데이터가 없다는 뜻.
            // 새로운 노드가 추가되면 덱의 전체 노드는 1개가 된다.
            if(!this.head) {
                // 노드가 1개일 경우,
                // head도, tail도 이 노드이지만
                // (앞에서 빼든, 뒤에서 빼든 이 node가 빠지므로)
                // 연결 관계는 존재하지 않음
                this.head = node
                this.tail = node
                this.size++
                return
            }
            
            // 덱의 기존 head인 node를 임시 저장
            let temp = this.head
            
            // 기존 head인 node의 이전 노드를 새로운 노드로 지정
            this.head.prev = node
            
            // deque의 head를 새로운 노드로 대체
            this.head = node
            
            // 새로운 head의 다음 노드는 기존의 head로 지정
            // 기존의 head였던 노드에 다음 노드의 정보가 포함되어있으므로
            // 전체 노드들의 연결 관계가 유지됨.
            this.head.next = temp
            
            this.size++
        }
        
        // deque 뒤쪽에 데이터 추가
        // unshift와 동일한 행동을 tail쪽에서 해주면 된다.
        push(n) {
            const node = new Node(n)
            
            if(!this.head) {
                this.head = node
                this.tail = node
                this.size++
                return
            }
            
            // 기존 tail node를 임시 저장
            let temp = this.tail
            
            // 기존 tail의 다음 노드를 새로운 노드로 지정
            this.tail.next = node
            
            // 새로운 node를 덱의 tail로 대체
            this.tail = node
            
            // 새로운 노드의 이전 노드를 기존 덱의 tail로 지정
            // 마찬가지로 기존의 tail node에 자신의 이전 node의
            // 정보가 포함되어 있으므로 연결관계는 유지된다.
            this.tail.prev = temp
            
            this.size++
        }
        
        // deque의 앞쪽에서 데이터를 제거한다.
        shift() {
            // 덱에 데이터가 없는 경우 아무 일도 하지 않음
            if(!this.head) return
            
            // 제거할 데이터를 저장
            // 보통 데이터를 제거한다는건 이걸 쓸 것이라는 의미이므로
            // 이걸 나중에 반환값으로 주면 된다.
            let item = this.head.item
            
            // deque의 전체 크기를 저장해두면 이럴 때 도움이 된다.
            if(this.size === 1) {
                // 데이터가 1개인 덱에서 데이터를 제거하면
                // 덱은 비게 된다.
                this.head = null
                this.tail = null
                this.size--
                
                return item
            } 
            
            // 노드가 2개인데 하나를 제거하면
            // 상술한 예외 케이스인 노드가 1개인 경우가 되므로 
            // 이 경우엔 신경써줄게 많다.
            if( this.size === 2) {
                // 기존 head를 대체
                // 노드가 2개이므로 head 다음 node는 tail이다.
                this.head = this.head.next
                
                // 노드가 1개이므로 head = tail이고,
                // 다음 노드, 이전 노드의 개념이 사라진다.
                this.head.next = null
                
                // 바뀐 head에서 기존의 head였던 노드 정보를 제거
                this.head.prev = null
                
                // 노드가 1개이므로 head = tail
                this.tail = this.head
                this.size--
                
                return item
            }
            
            // 그 외의 경우엔 head를 제거하고,
            // 그 head와 연관된 연결관계 정보를 지우면 된다.
            this.head = this.head.next
            this.head.prev = null
            this.size--
            return item
        }
        
        // 덱의 뒤 쪽에서 item 제거
        // shift에서 했던 작업을 tail에서 해주면 된다.
        pop() {
            if(!this.head) return
            
            let item = this.tail.item
            
            if(this.size === 1) {
                this.head = null
                this.tail = null
                
                return item
            }
            
            if(this.size === 2) {
                
                // 기존 tail의 이전 노드 (이 경우엔 head이기도 한)
                // 를 tail로 교체
                this.tail = this.tail.prev
                
                // 기존 tail과의 연관 관계를 끊는다.
                this.tail.next = null
                
                // 노드가 하나이므로 노드간 연관 관계 제거
                this.tail.prev = null
                
                this.head = this.tail
                this.size--
                
                return item
            }
            
        }
    }
```