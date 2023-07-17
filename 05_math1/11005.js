// const [N, B] = require("fs").readFileSync("/dev/stdin")
// .toString().trim().split(" ").map(Number)

let [N, B] = `60466173 36`.split(" ").map(Number)

// 일단 자릿수부터 구하자.
let digit = 1
do {
    digit++;
} while ( B ** digit < N + 1)


let ans_arr = []

for (let i = digit; i >= 1; i--) {
    let num = Math.floor(N/(B**(i - 1)))
    N -= (B**(i-1)) * num
    ans_arr.push(num)
}

let ans = ""

for (let i = 0; i < ans_arr.length; i++) {
    if( ans_arr[i] >= 10 ) {
        ans += String.fromCharCode(ans_arr[i]+55)
    } else {
        ans+= ans_arr[i].toString()
    }
}

console.log(ans)

// 왜 안되지..? ㅠㅠ..