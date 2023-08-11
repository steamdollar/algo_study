let input = require("fs").readFileSync("/dev/stdin").toString().trim()
.split("\n")

let [a1, b1] = input[0].split(" ").map(v => +v)
let [a2, b2] = input[1].split(" ").map(v => +v)

let mom = b1 * b2
let son = a1*b2 + a2*b1

let arr = [mom, son].sort((a,b) =>  a - b)

let gcd = 1

let x = mom
let y = son
while(true) {
    let temp = y
    y = x
    x = temp % x
    
    if(x == 0) {
        gcd = y
        break;
    }
}

console.log(son/gcd, mom/gcd)