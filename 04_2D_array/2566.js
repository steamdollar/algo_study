const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")

let m = 0
let n = 0
let max = 0

for(let i = 0; i < input.length; i++) {
    let arr1D = input[i].split(" ").map(Number)
    
    for(let j = 0; j < arr1D.length; j++) {
        // >, >= 의 차이가 없는 것 같은데 왜 >는 안되고 >=는 안 될까..
        // 복수의 최대값이 있다면 아무거나 출력해도 된다며..
        // 모든 수가 0 인 경우 m ,n 값이 안 변하네.. 그래서 그런 듯
        if(arr1D[j] >= max) {
            max = arr1D[j]
            m = i + 1
            n = j + 1
        }
    }
}

console.log(max)
console.log(m, n)