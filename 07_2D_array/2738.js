const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")

const ans = []

const [M, ] = input[0].split(" ").map(Number)

for(let i = 1; i <= M; i++) {
    let arr1D = []
    
    const arr1 = input[i].split(" ").map(Number)
    const arr2 = input[i+M].split(" ").map(Number)
    
    for(let j = 0; j < arr1.length; j++) {
        arr1D.push(arr1[j] + arr2[j])
    }
    
    ans.push(arr1D.map(Number).join(" "))
}

console.log(ans.join("\n"))

// 행, 열을 반대로 봐서 계속 런타임 에러가 떳다.
// 문제 잘 읽어보니 N이 열, M이 행이었음.