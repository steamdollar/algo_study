// let input = require("fs").readFileSync("/dev/stdin").toString().trim()
let input = `13
but
i
wont
hesitate
no
more
no
more
it
cannot
wait
im
yours`.split("\n")

// splice method 자체는 제거한 요소를 리턴함
// 즉 이 자체는 잘려나간 첫 번째 요소를 리턴함.
// console.log(input.splice(0,1))
input.splice(0,1) 

let arr = []
for(let i = 0; i < input.length; i++) {
    if(!arr.includes(input[i])) {
        arr.push(input[i])
    }
}

const sortFunc = (a, b) => {
    if(a.length != b.length) {
        return a.length - b.length
    }
    
    for(let i = 0; i < a.length; i++) {
        // asc 코드 비교
        if(a[i].codePointAt() != b[i].codePointAt()) {
            return a[i].codePointAt() - b[i].codePointAt()
        }
    }
}

arr.sort(sortFunc)

console.log(arr.join("\n"))

// 위처럼 해도 되는데 (아마 문제 의도도 이게 맞을 듯) Set 자료구조를 사용해보자.
// study/set.js
