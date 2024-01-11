// let X = require("fs").readFileSync("/dev/stdin").toString().trim()

X = 14

// [1, 2~3, 4~6, 7~10, ...]
// 1. n번째 그룹의 분자 + 분모는 n+1
// 2. n번째 group의 min 값은 1 + n(n-1)/2
// max 값은 n+1번째 group의 min - 1 이므로
// 1 + n(n+1)/2 -1 = n(n+1)/2

// X가 n번째 group의 min, max 사이에 있다면
// X - min(n) + 1이 분자, (n - 분자)가 분모

let n = 1

// X가 몇 번째 그룹에 속해있는지 구한다.
// n번째 group의 min, max 사이에 있을 때까지 반복하면 됨
while(!(X >= (1+ n*(n-1)/2) && X <= n*(n+1)/2 )) {
    n++
}

// n번째 group의 몇 번째 원소인지를 구한다.
// 분자는 영어로 numerator
let numerator = X - (n*(n-1)/2)

// 분모는 영어로 denominator
let denominator = (n+1) - numerator

if ( n % 2 == 0) {
    console.log(numerator+"/"+denominator)    
} else {
    console.log(denominator+"/"+numerator)
}

// 문제를 잘 안 읽는게 큰일이다..
// 테스트에서 답을 체크해볼 수 있으면 모르곘는데
// 테스트 못 돌려보는거면 내 실수를 잡아낼 수가 없을텐데..