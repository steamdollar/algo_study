let N = require("fs").readFileSync("/dev/stdin").toString().trim()

// 첫항 예외
// if N = 1 > an = 1

// if n >= 1  
// 2 + 6 * (0) ~ min + 6n (6) > 1
// 2 + 6 * (1) ~ 19 (12) > 2
// 2 + 6 * (1 + 2) ~ 37 (18) > 3

// for n ( n >= 1 )
// min = 2 + 6(1+...n-1) = 2 + 6 * (n-1)n / 2 = 3n^2 -3n + 2
// max = min + 6n - 1 = 3n^2 + 3n + 1

// 주어진 수가 min, max 사이에 있다면 지나는 방의 수는 n+1이 된다.
let n = 0

// 점화식이든 수열이든 쓸거면 첫항이 예외인지 확인해라..
if (N != 1) {
    while(!(N >= (3* n**2 - 3*n + 2) && N <= (3*n**2 + 3 * n + 1))) {
        n++
    }
}

console.log(n+1)
