let [n, k] = require("fs").readFileSync("/dev/stdin").toString().trim()
.split(" ").map(v => +v)

const nCk = (n, k) => {
    let v = 1
    let temp = k

    let t = 0
    // n, n-1, ... n-k+1 을 곱
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

console.log(nCk(n,k))