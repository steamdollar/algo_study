const input = require("fs").readFileSync("/dev/stdin").toString().trim()

// const input = "3\n40 60 80"

const scores = input.split("\n")[1].split(" ").map(Number)

let max_score = 0

for ( let i = 0; i < scores.length; i++) {
    if(i == 0) {
        max_score = scores[i]
    } else {
        if (max_score < scores[i]) {
            max_score = scores[i]
        }
    }
}

for(let i = 0; i < scores.length; i++) {
    scores[i] = scores[i]/max_score * 100
}

let sum = 0

for(let i = 0; i < scores.length; i++) {
    sum += scores[i]
}

let avg = sum/(scores.length)

console.log(avg)