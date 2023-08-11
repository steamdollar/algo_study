let [a, b] = require("fs").readFileSync("/dev/stdin").toString().trim()
.split(" ").map(v => +v).sort((a,b) => a-b)

let gcd = 1

let x = a
let y = b
    
while(true) {
    let temp = y
    y = x
    x = temp % x
    
    if(x == 0) {
        gcd = y
        break;
    }
}    

console.log(a * b / gcd)

// 유클리드 호제법을 사용하라는게 문제 의도
// 두 양의 정수 a, b (a < b)에 대해, b = aq +r 이면
// gcd(b, a) = gcd(a, r)
// 이걸 반복하면 r = 0이 되고, 그 때의 q가 최대공약수가 되는 듯

// 10 4
// 10 = 4 * 2 + 2
// 4 = 2 * 2
// gcd(10, 4) = 2
// 이걸 이제 코드로 옮기면 된다.