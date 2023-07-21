let input = require("fs").readFileSync("/dev/stdin").toString().trim()
.split(" ").map(Number)

// 숫자 정렬할 때 sort 이렇게 쓰는거 아니다. 이러면 사전 순으로 배열됨.
// input.sort()

input.sort((a,b) => a -b)

if((input[0] + input[1]) <= input[2]) {
    console.log((input[0] + input[1])*2 - 1)
} else {
    console.log(input[0] + input[1] + input[2])
}