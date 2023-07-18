// const 쓰지 마라. 알고리즘 풀땐 왠만하면 let으로 할당하자..
// let [N, B] = require("fs").readFileSync("/dev/stdin")
// .toString().trim().split(" ").map(Number)

 let [N, B] = `36 6`.split(" ").map(Number)

// 일단 자릿수부터 구하자.
let digit = 0
do {
    digit++;
} while ( B ** digit < N + 1)


let ans_arr = []

//
for (let i = digit; i >= 1; i--) {
    let num = Math.floor(N/(B**(i - 1)))
    N -= (B**(i-1)) * num
    ans_arr.push(num)
}

let ans = ""

console.log(ans_arr)

for (let i = 0; i < ans_arr.length; i++) {
    if( ans_arr[i] >= 10 ) {
        ans += String.fromCharCode(ans_arr[i]+55)
    } else {
        ans+= ans_arr[i].toString()
    }
}

console.log(ans)

//

// 1. const 좀 쓰지 말자. 알고리즘 문제는 const 쓸 이유가 없는 것 같음.

// 2. do - while문은 일단 한 번 실행하고 조건을 따진다.
// 자릿수 구할때 일단 1올리고 시작했기 때문에 에러가 발생한거였음.
// > js에서 제공하는 여러가지 반복문들에 대한 학습이 필요하다.