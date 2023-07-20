let [m, n] = require("fs").readFileSync("/dev/stdin").toString().trim()
.split("\n").map(Number)

let min = 0
let sum = 0

// 예외, 2로 m, n 하나 이상이 2일 경우

// m ~ n까지의 자연수에 대해 반복
for(let i = m; i <= n; i++) {
    // j = (2 ~ i-1) 까지로 i를 나눠본다.
    // 이 중 하나라도 나머지가 0 이면 소수가 아님
    
    // 2는 예외.
    if(i == 2) {
        min = 2
        sum += 2
        continue
    }
    
    for(j = 2; j < i; j++) {
        if(i % j == 0 && i != 2) {
            break;
        }
        // 여기 조건문 안으로 들어왔다면 i는 소수가 맞다 
        if (j == i-1 || i == 2) {

            // 이전까지 소수가 없었다면 최솟값은 i가 된다.
            if(min == 0) {
                min = i    
            }
            // 소수의 합에 i를 더해준다.
            sum += i
        }
    }
}


if( min == 0) {
    console.log(-1)
} else {
    console.log(sum)
    console.log(min)    
}
