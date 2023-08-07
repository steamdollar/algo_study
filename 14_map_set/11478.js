//let input = require("fs").readFileSync("/dev/stdin").toString().trim()
let input = "ababc"

let ansSet = new Set()

// 이중 반복문이 있다는것 자체가 뭔가 불안하다..
// 마음에 드는 풀이는 아님..
// 근데 메모리나 시간이나 나쁘지 않네..
for(let i = 0; i < input.length; i++) {
    for(let j = i+1; j < input.length + 1; j++) {
        ansSet.add(input.substring(i, j))
    }
}

console.log(ansSet.size)