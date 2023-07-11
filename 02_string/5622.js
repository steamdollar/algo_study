const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("")


const strToNum = ["", "ABC", "DEF", "GHI", "JKL", "MNO", "PQRS", "TUV", "WXYZ"]

let ans_arr = []

for (let i = 0; i < input.length; i++) {
    for ( let j = 0; j < strToNum.length; j++) {
        if (strToNum[j].split("").includes(input[i])) {
            ans_arr.push(j+1)
        }
    }
}

let time = 0

for(let i = 0; i < ans_arr.length; i++) {
    time += ans_arr[i] + 1
}

console.log(time)
