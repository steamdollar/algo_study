// let input = require("fs").readFileSync("/dev/stdin").toString().trim()
// .split("\n")
let input= `5 2
100 76 85 93 98`.split("\n")

let [, k] = input[0].split(" ").map(Number)
let scores = input[1].split(" ").map(Number)

scores.sort((a,b) => b-a)

console.log(scores[k-1])