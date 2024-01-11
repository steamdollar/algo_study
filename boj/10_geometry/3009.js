let input = require("fs").readFileSync("/dev/stdin").toString().trim()
.split("\n")

let a = input[0].split(" ").map(Number)
let b = input[1].split(" ").map(Number)
let c = input[2].split(" ").map(Number)

let x = 0
let y = 0

if(a[0] == b[0]) {
    x = c[0]
} else if (a[0] == c[0]) {
    x = b[0]
} else if (b[0] == c[0]) {
    x = a[0]
}

if(a[1] == b[1]) {
    y = c[1]
} else if (a[1] == c[1]) {
    y = b[1]
} else if (b[1] == c[1]) {
    y = a[1]
}

console.log(x, y)

// 별로 맘에 드는 풀이는 아님..