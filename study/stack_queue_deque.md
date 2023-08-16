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

``` js
    class Deque {
        constructor() {
            this.items = []
        }
        
        // 배열 앞쪽에 요소 삽입
        addFront(el) {
            this.items.unshift(el)
        }
        
        // 배열 뒤쪽에 요소 삽입
        addBack(el) {
            this.items.push(el)
        }
        
        // 배열 가장 앞 요소 제거
        removeFront() {
            return this.items.shift()
        }
        
        // 배열 가장 뒤 요소 제거
        removeBack() {
            return this.items.pop()
        }
        
        // 배열 가장 앞/뒤 요소 확인
        peekFront() {
            return this.items[0]
        }
        
        peekBack() {
            return this.items[this.items.length -1]
        }
        
        isEmpty() {
            return this.items.length === 0
        }
        
        size() {
            return this.items.length
        }
        
    }
```