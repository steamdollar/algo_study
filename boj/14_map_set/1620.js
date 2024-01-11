let input = require("fs").readFileSync("/dev/stdin").toString().trim()
.split("\n")

let [M, N] = input[0].split(" ").map(Number)

let q = new Map()

for(let i = 1; i < input.length - N; i++) {
    q.set(i, input[i])
}

// 일단 임의로 k -v가 q와 반대인걸 하나 만들어서 썻는데..
// 이것도 그닥 좋아보이는 방법은 아닌 것 같다.
let q2 = new Map()

for(let i = 1; i < input.length - N; i++) {
    q2.set(input[i], i)
}


let ans = ""

for(let i = M+1; i < input.length; i++) {
    if(input[i][0].charCodeAt() >= 48 && input[i][0].charCodeAt() <= 57) {
        ans += q.get(Number(input[i])) + "\n"
    } else {
        ans += q2.get(input[i]) + "\n"
    }
}

console.log(ans)

// map을 사용할 수 있는지 묻는 문제..
// map에 대한 기본적인 사항들을 공부하고 풀면 될 것 같다.