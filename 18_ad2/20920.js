// let input = require("fs").readFileSync("/dev/stdin").toString().trim()
let input = `12 5
appearance
append
attendance
swim
swift
swift
swift
mouse
wallet
mouse
ice
age`.split("\n")

const [, M] = input[0].split(" ")


// 단어 횟수가 많을 순, 단어 길이가 긴 순, 알파벳 순으로 배치

input.shift()

const filtered = input.filter(v => (v.length >= +M))

console.log(filtered)

// 각 조건을 순서대로 적용해줌녀 될 것 같긴 하다..