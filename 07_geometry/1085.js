let [ x, y, w, h ] = require("fs").readFileSync("/dev/stdin").toString().trim()
.split(" ").map(Number)

// x, w-x, y, h-y중 가장 작은거 출력
let min = 0

const chooseMin = (a, b) => {
    if(a >= b) {
        return b
    } else {
        return a
    }
}

let dx = chooseMin(x, w-x)
let dy = chooseMin(y, h-y)

console.log(chooseMin(dx, dy))