// let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")

let input =`AABCDD
afzz
09121
a8EWg6
P5h3kx`.split("\n")

let longest = 0

for(let i = 0; i < input.length; i++) {
    if (input[i].length >= longest) {
        longest = input[i].length
    }
}

let ans = ""

for(let i = 0; i < longest; i++) {
    for(let j = 0; j < input.length; j++) {
        if(input[j][i] != undefined) {
            ans+= input[j][i]    
        }
        
    }
}

// [0][0], [1][0], ..., [input.length][0], [0][1], [1][1], ...

console.log(ans)