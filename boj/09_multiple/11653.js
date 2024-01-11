let original = Number(require("fs").readFileSync("/dev/stdin").toString().trim())
let n = original

let factors = []

if( original != 1 ) {
    for(let i = 2; i <= original/2; i++) {
        while (n % i == 0) {
            factors.push(i)
            n = n/i
        }
        if (n == 1) break;
    }
    
    for (let i = 0; i < factors.length; i++) {
        console.log(factors[i])
    }
    
    // 소수인 경우
    if(factors.length == 0) {
        console.log(original)
    }
}

