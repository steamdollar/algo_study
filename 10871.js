let fs = require("fs")
let input = fs.readFileSync("/dev/stdin").toString().split("\n")

let con = input[0]
let std = con.split(" ")[1]

let arr1 = input[1].split(" ")

// split을 통해 문자열을 찢었으면 그 결과들은 문자다.
// 데이터 타입 맞춰준다..

// filter 쓰는게 오히려 더 시간, 메모리 사용이 늘어나네..
arr2 = arr1.filter(i => Number(i) < std)

for(let i = 0; i < arr2.length; i++) {
    console.log(arr2[i])
}