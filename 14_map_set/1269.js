let input = require("fs").readFileSync("/dev/stdin").toString().trim()
.split("\n")

input.shift()

let setA = new Set(input[0].split(" "))

// 굳이 둘 다 set으로 만들 필요는 없네.
// 둘 중 하나만 set이면 set이 가진걸 array도 가졌는지 체크하는 시간은
// set과 set을 비교하는 것과 별 차이가 없는듯
let setB = new Set(input[1].split(" "))

let intersection = new Set(Array.from(setA).filter(v => setB.has(v)))

console.log(setA.size + setB.size - intersection.size * 2)