//let input = require("fs").readFileSync("/dev/stdin").toString().trim()
let input = `5
2 1 4 -10 4 -9 -9`
.split('\n')

input.shift()

let arr = input[0].split(" ").map(Number)

// k - v 형태면 정말 편할 것 같음

// 반복문으로 한 결과 시간 초과..
//https://www.acmicpc.net/submit/18870/64325621

const sortFunc = (a,b) => {
    return a-b
}

let unique = [... new Set([...arr].sort(sortFunc))]


//
// let ans = arr.map(v => unique.indexOf(v))
// console.log(ans)
//
// 이것도 시간 초과. indexOf도 O(n)의 탐색 시간을 가진다고 한다.
// 아마 배열 원소를 하나 하나 다 읽어서 찾는 방식인듯.

//
// 그래서 찾아본게 Dictionary
// 이에 관해 공부한건 study/dictionary.js에 기록한다.

let dic1 = {}

for(let i = 0; i < unique.length; i++) {
    dic1[unique[i]] = i
}

let ans = arr.map(v => dic1[v])

console.log(ans.join(" "))