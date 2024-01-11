let input = require("fs").readFileSync("/dev/stdin").toString().trim()
.split("\n").map(Number)

let average = 0

for(let i = 0; i < input.length; i ++) {
    average += input[i]
}

console.log(average/5)

// let arr1 = input.sort((a,b) => {a, b})
// 이건 안 됨. 화살표 함수에서 {}은 함수 body를 의미하므로
// return 값을 따로 주지 않으면 아무것도 반환하지 않게 된다.
// {}, return을 다 생략하던가, 둘 다 쓰던가 해야함.

let arr1 = input.sort((a,b) => a-b)

console.log(arr1)

console.log(arr1[2])