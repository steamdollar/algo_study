let input = require("fs").readFileSync("/dev/stdin").toString().trim()

let numArr = input.split("").map(Number).sort((a,b) => b-a)

console.log(numArr.join(""))