//let input = require("fs").readFileSync("/dev/stdin").toString().trim()
let input=`4
2
6
12
18`.split("\n").map(v => +v)

input.shift()

// 생각해보면 주어진 숫자들이 애초에 오름차순이라 sort할 필요가 없음
let distance = input[input.length-1]-input[0]


// 차이의 배열도 따로 만들 필요없이 input[i+1] - input[i]만 사용하면 됨

// 왜 이걸 쓰면 StackSizeExceeded 가 뜰까..

// let diffArr = []
// for(let i = 0; i < input.length-1; i++) {
//     diffArr.push(input[i+1] - input[i])
// }

// 유클리드 호제법을 재귀함수적으로 작성
// 지난 문제에서도 이게 하고 싶었음..
const getGcd = (a,b) => {
    if ( a % b == 0 ) {
        return b
    } else {
        return getGcd(b, a % b)
    }
}

let gcd = input[1] - input[0]

// 두 개씩 순차적으로 최대공약수를 구한다..
for( let i = 0; i < input.length - 1; i++) {
    gcd = getGcd(input[i+1] - input[i], gcd)
}

console.log(distance/gcd - input.length + 1)
