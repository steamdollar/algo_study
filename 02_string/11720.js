const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")

const num = input[1].split("").map(Number)

let ans = 0

for(let i = 0; i < num.length; i++) {
    ans += num[i]    
}

console.log(ans)