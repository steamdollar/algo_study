const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ")

const ideal_arr = [ 1, 1, 2, 2, 2, 8 ]

const ans = []

for (let i = 0; i < input.length; i++) {
    ans.push(ideal_arr[i] - input[i])
}

console.log(ans.join(" "))