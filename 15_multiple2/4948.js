//let input = require("fs").readFileSync("/dev/stdin").toString().trim()
let input=`1
10
13
0`.split("\n").map(v => +v)

input.splice(input.length-1, 1)

const isPrime = (n) => {
    if(n === 1) return false
    if(n === 2) return true
    
    let ans = false
    
    let i = 2
    while(true) {
        if(n % i === 0) {
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

let ansArr= []

for (let i = 0; i < input.length; i++) {
    let num = 0
    for(let j = input[i] + 1; j <= input[i] *2; j++) {
        if(isPrime(j)) {
            num++
        }
    }
    ansArr.push(num)
}

console.log(ansArr.join("\n"))