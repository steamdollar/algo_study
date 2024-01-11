const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")

let ans_arr = []

for (let i = 1; i < input.length; i++) {
    let [num, str] = input[i].split(" ")
    
    let strs = ""
    for ( let j = 0; j < str.length; j++ ) {
        
        for( let k = 0; k < num; k ++) {
            strs += str[j]
        }
    }
    ans_arr.push(strs)
}

console.log(ans_arr.join("\n"))