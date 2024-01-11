let input = require("fs").readFileSync("/dev/stdin").toString().trim()
.split("\n")

input.shift()

let arr1 = input.map(v => v.split(" "))

const sortFunc = (a,b) => {
    if(Number(a[0]) != Number(b[0])) {
        return a[0]-b[0]
    }
}

arr1.sort(sortFunc)

// map은 새로운 배열을 생성하는거지, 원 배열을 바꾸는게 아니다.
// 새로운 변수에 결과값을 담아줘야 함.
let ans = arr1.map(v => v.join(" "))

console.log(ans.join("\n"))
