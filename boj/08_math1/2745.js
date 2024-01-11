// 정말 함정에 많이 빠졌다.
// 진법 변환이면 암산으로도 하는거네 헀다가 방심한 것도 큰듯..

// 우선 반복문의 순서..
// 숫자열은 시작이 가장 큰 수지만
// 이걸 문자열 취급해 처음부터 읽으면 반복문이 0이므로
// 자릿수를 반대로 컴퓨터가 계산하게 됨.
// 일단 이게 첫 번째 였고,

// 두 번쨰는 아스키 코드..
// 이걸 변환할 때 숫자의 경우를 생각하지 않아서 틀렸고

// 마지막은 괄호를 안 쳐줘서 연산 순서가 뒤바뀌어서 틀렸다.

const [N, B] = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ")

const arr_N = N.split("")

let ans = 0

for (let i = 0; i < arr_N.length; i++) {
    if(arr_N[i].charCodeAt() >= 65) {
        ans += (B ** (arr_N.length-i-1)) * (arr_N[i].charCodeAt() - 55)
    } else {
        ans += (B ** (arr_N.length-i-1)) * Number(arr_N[i])
    }
}

console.log(ans)