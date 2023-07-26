//let n = Number(require("fs").readFileSync("/dev/stdin").toString().trim())
let n = 15

let available = false

if(n % 5 == 0) {
    console.log(n/5)
    available = true
} else {

    // 일단 5를 최대한 많이 쓰고,
    // 안되면 하나씩 빼고 3으로 대체하는 식으로 간다.
    for(let i = Math.floor(n/5); i >= 0; i--) {
        if((n - 5*i)% 3 == 0) {
            console.log(i + (n - 5*i)/3)
            available = true
            break;
        }
    }
}

if(available == false) {
    console.log(-1)
}