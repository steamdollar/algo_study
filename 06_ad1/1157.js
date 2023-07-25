const input = require("fs").readFileSync("/dev/stdin").toString().trim().toLowerCase()

let ans_arr = new Array(26)
for (let i = 0; i < ans_arr.length; i++) {
    ans_arr[i] = 0
}

for (let i = 0; i < input.length; i++) {
    ans_arr[input[i].charCodeAt()-97] = ans_arr[input[i].charCodeAt()-97] + 1 
}

let max = 0
let max_index = 0

for(let i = 0; i < ans_arr.length; i++) {
    if(ans_arr[i] > max) {
        max = ans_arr[i]
        max_index = i
    }
}

const isRedundent = ans_arr.filter((v) => v == max)

if(isRedundent.length > 1) {
    console.log("?")
} else {
    console.log(String.fromCodePoint(ans_arr.indexOf(max)+97).toUpperCase())
}