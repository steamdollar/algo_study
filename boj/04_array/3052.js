// .toString() 다음에 .trim() 붙여줘야 한다.
// 가끔 toString() 실행시 개행문자나 공백이 들어오는 경우가 있다.
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(Number).map((v) => v % 42)

let arr = []

for (let i = 0; i < input.length; i++) {
    let residue = input[i]
    if(arr.includes(residue)) {
        continue
    }
    arr.push(residue)
}

console.log(arr.length)