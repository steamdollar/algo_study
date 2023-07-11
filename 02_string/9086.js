const input = require('fs').readFileSync("/dev/stdin").toString().trim()

let ans_arr = []

for(let i = 1; i < input.split("\n").length; i++) {
    temp_str = input.split("\n")[i][0] + input.split("\n")[i][input.split("\n")[i].length-1]
    ans_arr.push(temp_str)
}

console.log(ans_arr.join("\n"))
