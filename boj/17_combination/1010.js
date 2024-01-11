// let input = require("fs").readFileSync("/dev/stdin").toString().trim()
let input=`3
2 2
1 5
13 29
28 28`.split("\n")

const nCk = (n, k) => {
    let v = 1
    let temp = k

    let t = 0

    while(temp > 0) {
        v *= (n-t)
        t++
        temp--
    }
        
    while(k > 1) {
        v /= k
        k--
    }
    
    return v
}

let ans = ""

for (let i = 1; i < input.length; i++) {
    let [n, m] = input[i].split(" ").map(v => +v)
    if (n === m) {
        ans += 1 + "\n"
    } else {
        if(n > m/2) {
            ans += nCk(m, m-n) + "\n"
        } else {
            ans += nCk(m, n) + "\n"        
        }
        
    } 
}

console.log(ans)

// test case에 28, 28을 넣으면 0.9999999999 가 나옴
// 컴퓨터의 소수 표현 기법에 따른 한계인듯..
// 아마 m = n인 경우 그냥 1로 처리하는게 좋을 듯

// 항상 내가 다루는 숫자의 최대값이 너무 크지는 않은지 조심핡섯.
// 이 문제에서 최대한으로 계산해야 하는 숫자는 29!인데 ( m, n = 29), 이 숫자는 너무 커서
// 오버플로우가 나고, 그래서 오답이 난다.
// 이를 방지하기 위해선 
// nCm = nCn-m (if m > n/2)
// 으로 처리해주면 된다.
// 애초부터 저런 큰 숫자를 계산할 일이 없도록..