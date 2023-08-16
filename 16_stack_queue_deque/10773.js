// let input = require("fs").readFileSync("/dev/stdin").toString().trim()
let input= `10
1
3
5
4
0
0
7
0
0
6`.split("\n").map(v => +v)

input.shift()

let ans = []

// class를 따로 만들 필요는 없을 것 같음
for(let i =0; i < input.length; i++) {
    if(input[i] == 0) {
        ans.pop()
    } else {
        ans.push(input[i])
    }
}

const reduceFunc = (acc, v) => {
    return acc + v
}

console.log(ans.reduce(reduceFunc, 0))

// reduce
// 배열의 값을 반복해 연산해 결과를 누적시키는 method

// arr.reduce(callback, initialValue)
// callback은 연산할 함수, initialValue는 초기값(optional)

// 여기서 cb는 다시 4가지의 인수를 받는다.
// accumulator : cb의 누적값 반환
// currentValue : 처리할 현재 요소
// currentIndex : 현재 요소의 인덱스 (초기값 ? 0 : 1)
// array : reduce()를 호출한 배열

// accumulator, currentValue를 제외한 나머지는 optional

