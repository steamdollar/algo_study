let input = require("fs").readFileSync("/dev/stdin").toString().trim()
.split("\n").map(v => +v)

input.shift()


// n이 소수인지를 판별하는 법
// 2~n**(1/2)까지의 수로 n을 나눌 수 없다면 n은 소수다.
const isPrime = (n) => {
    let ans = false
    
    if(n === 0 || n === 1 ) {return false}
    if (n === 2) {return true}
    
    let i = 2

    while(true) {
        if(n % i == 0 ) {
            break;
        }
        if(i**2 >= n) {
            ans = true
            break;
        }
        i++
    }
    return ans
}

let ans = ""

for(let i = 0; i < input.length; i++) {
    let nextPrime = input[i]
    
    while(!isPrime(nextPrime)) {
        nextPrime++
    }
    ans += nextPrime + "\n"
}

console.log(ans)

// 아이디어는 맞았는데 왜 자꾸 틀렸다고 했는지 모르겠다.
// 아마 n = 0, 1, 2일때의 에외처리를 안해줘서 그런것 같은데..

// 제곱근은 Math.sqrt(num)을 사용해서 간단하게 구할 수 있다.