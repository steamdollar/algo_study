const input = require("fs").readFileSync("/dev/stdin").toString().trim()

const [voca, num] = input.split("\n")

console.log(voca[num-1])