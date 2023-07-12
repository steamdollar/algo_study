// const input = require("fs").readFileSync("/dev/stdin").toString().trim()
// const N = Number(input)

const N = 5

// 가로 : 2N - 1
// 세로 : 2N - 1

// 1 ~ N의 k번쨰 줄
// 빈칸 : N - 1
// 별 : 2k -1 

// N+1 ~ 2N-1 번째 줄
// 빈칸 : k-N
// 별 : (2N - k) * 2 - 1

let print = ""

for (let i = 0; i < N; i++) {

    for(let j = 0; j < N-i-1; j++) {
        print += " "
    }
    
    for(let j = 0; j < 2*i+1; j++) {
        print += "*"
    }
    
    print += "\n"    

}

for ( let i = N+1; i < 2*N; i++ ) {
    for(let j = 0; j < i-N; j++) {
        print += " "
    }
    for (let j = 0; j < ((2*N-1)-i)*2 + 1; j++ ) {
        print += "*"
    }
    print += "\n"
}

console.log(print)