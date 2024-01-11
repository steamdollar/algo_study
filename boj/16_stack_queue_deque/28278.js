let input = require("fs").readFileSync("/dev/stdin").toString().trim()
.split("\n")

input.shift()

class MyStack {
    constructor() {
        this.items = []
    }
    
    // input[input.length]이 top
    func1(n) {
        this.items.push(+n)
    }
    
    func2() {
        if(this.items.length === 0) {
            return -1
        } else {
            let target = this.items[this.items.length-1]
            this.items.pop()
            return target
        }
    }
    
    func3() {
        return this.items.length
    }
    
    func4() {
        if(this.items.length == 0) {
            return 1
        } else {
            return 0

        }
    }
    
    func5() {
        if(this.items.length == 0) {
            return -1
        } else {
            return this.items[this.items.length-1]
        }
    }
} 

let stack = new MyStack

let ans = ""

for(let i = 0; i < input.length; i++) {
    if(input[i].length === 1) {
        switch (input[i]) {
        case "2" :
            ans += stack.func2() + "\n"
            continue
        case "3" :
            ans += stack.func3() + "\n"
            continue
        case "4" :
            ans += stack.func4() + "\n"
            continue
        case "5" :
            ans += stack.func5() + "\n"
            continue
        }
    } else {
        let cmd = input[i].split(" ")
        stack.func1(cmd[1])
        continue
    }
    
}

console.log(ans)

// 시간 초과? 왜 이게 시간 초과가 나지?
// 일단 콘솔 로그 호출 횟수를 줄여보자.
// 이래도 시간 초과.. 

// js에서 shift, unshift는 O(1)이 아니라고 한다.
// 배열 첫 부분에 원소를 삽입하거나 빼고 나머지 원소를 다 하나씩 밀거나 당겨야 함..

// 따라서 시간 단축을 위해서는
// push, pop을 사용해야 함.

// 이 shift, unshift의 시간복잡도는 사용하는 언어에서
// 배열을 어떤식으로 구현해놓았냐에 따라 다르다고 한다.