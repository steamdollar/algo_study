let n = require("fs").readFileSync("/dev/stdin").toString().trim()

// Bigint를 써줘야 함.
// Js로 표현할 수 잇는 숫자 범위는 -2^53 + 1 ~ 2^53 -1 임.
// 이 문제는 이 범위를 벗어난 숫자도 표현해야한다.

let num = BigInt(n)

console.log(`${num * num * num}`)
console.log(3)