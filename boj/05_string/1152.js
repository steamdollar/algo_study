const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ")

let sub = 0

if(input[0] == "") {
    sub++
}

if(input[input.length] == "") {
    sub++
}

console.log(input.length-sub)