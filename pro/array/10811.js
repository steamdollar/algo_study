const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")

const [N, M] = input[0].split(" ")

const origin = new Array(N)
for (let i = 0; i < N; i++) {
    origin[i] = i+1
}

for (let i = 1; i < input.length; i++) {
    const [a, b] = input[i].split(" ").map(Number)
    if (a == b) { continue }
    
    let temp_arr = []
    
    for (let j = a-1; j < b; j++) {
        temp_arr.push(origin[j])
    }
    
    temp_arr.reverse()
    
    for(let j = 0; j < temp_arr.length; j++) {
        origin[a-1+j] = temp_arr[j]
    }
}

console.log(origin.join(" "))