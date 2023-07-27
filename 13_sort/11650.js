// let input = require("fs").readFileSync("/dev/stdin").toString().trim()
let input = `5
-1 1
0 0
3 -2
2 2
-2 3
3 -1`.split("\n")

input.splice(0, 1)

// 이전 풀이는 시간 초과
// https://www.acmicpc.net/submit/11650/64139631
// 단순 조건문 반복문 남발로는 조금씩 한계가 느껴지는 것 같음

let arr = []

for (let i = 0; i < input.length; i++) {
    arr.push(input[i].split(" ").map(Number))
}

console.log(arr.sort())

// x = 0 기준으로 어떻게 할 수 있으려나..

// sort method의 인자로 들어가는 callback에 대해 좀 더 공부해봐야 할 것 같다.
