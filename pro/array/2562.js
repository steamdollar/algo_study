let input = require("fs").readFileSync("/dev/stdin").toString().split("\n")
.map(v => Number(v))

let index = 0
let max

for ( let i = 0; i < input.length; i++ ) {
    if(max < input[i] || max == undefined) {
        max = input[i]
        index = i+1
    }
} 


// 왜 +로 붙이면 string이 하나고, ',' 를 쓰면 서로 다른 string이라
// 한 칸을 띄고 출력하게 됨
console.log(max+"\n"+index)