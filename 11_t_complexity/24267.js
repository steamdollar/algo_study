// let n = require("fs").readFileSync("/dev/stdin").toString().trim()
let n = 500000
// 조합으로 생각해보자.
// let sum = 0
// for (let i = 1; i < n-1 ; i++) {
//     for(let j = i+1; j < n; j++) {
//         for(let k = j+1; k <n+1; k++) {
//             sum += i * j * k // code1
//         }
//     }
// }

//  1 <= i <= n-2
// i+1 <= j <= n-1
// j+1 <= k <= n
// i, j, k는 범위상 서로 다른 수여야 하고, 범위는 1~n-2

// BigInt가 어렵네..
// 연산은 반드시 BigInt끼리 완전히 끝내고, 그 후에 레터럴을 쓰든 형태 변환을 하든 해야함..
let num = BigInt(n)

console.log(`${(num-BigInt(2))*(num-BigInt(1))*(num)/BigInt(6)}`)
console.log(3)