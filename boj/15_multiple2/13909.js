//let n = Number(require("fs").readFileSync("/dev/stdin").toString().trim())
let n = Number(24)

// 약수의 갯수..
// 사실 이건 제곱수 찾으라는 문제다.
// 약수가 짝수면 마지막헤 닫혀있을 거고, 홀수면 열려있을 걸..
// 아니면 그 반대거나.
// 즉 n 이하의 범위에서 가장 큰 제곱수의 [제곱근] 찾으면 그게 답임


// let i = 1
// while(i**2 <= n) {
//     i++
// }

// console.log(i-1)

//
// 이것도 되는데 Math lib의 기능을 사용해보자
// 루트N 보다 작은 최대의 정수
console.log(Math.floor(Math.sqrt(n)))

// Math lib에 유용한게 많은 것 같다.
// 본격적으로 스택이나 큐 같은 자료 구조 공부하기 전에
// 먼저 여기서 쓸만한 함수들을 공부해가면 좋을 것 같다.