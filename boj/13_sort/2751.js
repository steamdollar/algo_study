let input = require("fs").readFileSync("/dev/stdin").toString().trim()
.split("\n").map(Number)

let arr1 = []
for (let i = 1; i < input.length; i++) {
    arr1.push(input[i])
}

arr1.sort((a,b) => a-b)

// console.log 가 생각보다 느리다고 한다.
// console.log 호출 횟수도 줄일 수 있다면 줄이는게 좋을 듯
// for (let i = 0; i < arr1.length; i++) {
//     console.log(arr1[i])
// }

console.log(arr1.join("\n"))