// let input = require("fs").readFileSync("/dev/stdin").toString().trim()
let input=`5
4
8
10
12
100`.split("\n").map(v => +v)

input.shift()


// 소수 판별 함수는 시간 초과..
// 에라토스테네스의 체를 사용해보자.
// 이것도 시간초과.. 좀 다듬어야 하나..

// 혼자 말렸네..
// 소수를 굳이 일일히 처음부터 구하지말고, 
// 구한 소수는 어디 보관하면 시간 단축에 도움이 될 것 같다.

// 일단 소수 정보를 저장하는건 확실히 해야하는것 같음.
// 그 범위를 어떻게 할 것인가..
// input에서 가장 큰 정수까지의 배열을 만들면 될 것 같다.

let max

for(let i = 0; i < input.length; i++) {
    if(max == undefined || max < input[i]) {
        max = input[i] 
    }
}

let primeRecord = new Array(max).fill(false)

const isPrime = (n, arr) => {
    if (n == 2) return true
    if( n%2 === 0 || n === 1 ) return false
    if(arr[n-1] == true) return true
    
    let ans = false
    let i = 2;
    while(true) {
        if(n % i == 0) {
            break;
        }
        if(i**2 >= n) {
            arr[n-1] = true
            ans = true
            break;
        }
        i++
    }
    return ans
}

let ansArr = []

for (let i = 0; i < input.length; i++) {
    let count = 0
    for(let j = 2; j <= input[i]/2; j++) {
        if(isPrime(j, primeRecord) && isPrime(input[i]-j, primeRecord)) {
            count++
        }
    }
    ansArr.push(count)
}

console.log(ansArr.join("\n"))