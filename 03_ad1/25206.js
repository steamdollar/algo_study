const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")

// 전체 학점 수
let creditCount = 0

// 전체 학점
let totalScore = 0

for (let i = 0; i < input.length; i++) {
    let info = input[i].split(" ")

    if(info[2] == "P") {
        continue
    }
    
    credit = Number(info[1])
    creditCount += credit
    
    let score = 0
    
    if(info[2] == "A+") {
        score=4.5
    } else if (info[2] == "A0") {
        score = 4.0
    } else if (info[2] == "B+") {
        score = 3.5
    } else if (info[2] == "B0") {
        score = 3.0
    } else if (info[2] == "C+") {
        score = 2.5
    } else if (info[2] == "C0") {
        score = 2.0
    } else if (info[2] == "D+") {
        score = 1.5
    } else if (info[2] == "D0") {
        score = 1.0
    } else if (info[2] == "F") {
        score = 0
    }
    
    totalScore += credit * score  
}

console.log(totalScore/creditCount)