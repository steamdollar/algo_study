let [N, K] = require("fs").readFileSync("/dev/stdin").toString().trim()
.split(" ").map(Number)

let num = 0
let ans = 0

for(let i = 1; i <= N; i++) {
    if( N % i == 0) {
        num++
        if(num == K) {
            ans = i
        }
    }
}

console.log(ans)