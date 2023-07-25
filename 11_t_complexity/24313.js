// 알고리즘의 소요 시간을 나타내는 O-표기법(빅-오)을 다음과 같이 정의하자.

// O(g(n)) = {f(n) | 모든 n ≥ n0에 대하여 f(n) ≤ c × g(n)인 양의 상수 c와 n0가 존재한다}

// 함수 f(n) = a1n + a0, 양의 정수 c, n0가 주어질 경우 O(n) 정의를 만족하는지 알아보자.

// f(n), c, n0가 O(n) 정의를 만족하면 1, 아니면 0을 출력한다.

let input = require("fs").readFileSync("/dev/stdin").toString().trim()
.split("\n")


let [a1, a0] = input[0].split(" ").map(Number)
let c = Number(input[1])
let n0 = Number(input[2])

// 7n + 7 <= 8 * g(n) for n >= 1)
// (n+1) * 7/8 <= g(n) for n >= 1
// g(n) = n? 왜지?

// a1n + a0 <= c * n for (n >= n0)
// (a1-c)n + a0 <= 0 ( n >= n0 )

// i) if (a1 - c) > 0
// 기울기가 양수라면
// 조건 만족 불가.. 언젠가 양수가 된다.

// ii) a1 -c = 0 
// a0 <= 0 이면 만족

// iii) a1 -c < 0
// 기울기가 음수면 언젠가 조건을 만족하게 되어있다.
// n0가 그 범위 안에 있다면 가능
// n0 >= a0/(c-a1)

if (a1 -c > 0) {
    console.log(0)
} else if (a1 -c == 0) {
    if(a0 <= 0) {
        console.log(1)
    } else {
        console.log(0)
    }
} else {
    if(n0 >= a0/(c-a1)) {
        console.log(1)
    } else {
        console.log(0)
    }
}