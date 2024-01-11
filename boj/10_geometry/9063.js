// let input = require("fs").readFileSync("/dev/stdin").toString().trim()
let input =`4
2 1
3 2
5 2
3 -4`
.split("\n")

// 좌표들의 (x값의 차이중 최대) * (y값의 차이중 최대) 를 출력하면 됨

let points = []

for (let i = 1; i < input.length; i++) {
    points.push(input[i])
}

let ptArr = points.map(v => v.split(" ").map(Number))

let xPoints = []
let yPoints = []

for (let i = 0; i < ptArr.length; i++) {
    xPoints.push(ptArr[i][0])
    yPoints.push(ptArr[i][1])
}

const getDiff = (arr) => {
    return (Math.max(...arr) - Math.min(...arr))
}

console.log(getDiff(xPoints) * getDiff(yPoints))