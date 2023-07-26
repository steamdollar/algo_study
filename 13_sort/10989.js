// let input = require("fs").readFileSync("/dev/stdin").toString().trim()
let input = `10
5
2
3
1
4
2
3
5
1
7`.split("\n").map(Number)

input.splice(0, 1)

input.sort((a,b) => b-a)

console.log(input.join("\n"))