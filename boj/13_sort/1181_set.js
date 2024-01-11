let input = require("fs").readFileSync("/dev/stdin").toString().trim()
.split("\n")

// 배열 맨 앞의 값을 제거하는 method .shift()가 있다.
input.shift()

// 중복제거는 이렇게 set으로 한 번 갔다 오는걸로 할 수 있음
let arr = [...new Set(input)]

// 이게 범인. 얘가 느리다..
// let arr = []
// for(let i = 0; i < input.length; i++) {
//     if(!arr.includes(input[i])) {
//         arr.push(input[i])
//     }
// }

// 일단 사전 순으로 배열 후, 길이 순으로 배열해도 똑같다.
// arr.sort()

// const sortFunc = (a,b) => {
//     return a.length - b.length
// }

// 아니 얘가 오히려 약간 빠르네? 뭐가 문제였던거지?
const sortFunc = (a, b) => {
    if(a.length != b.length) {
        return a.length - b.length
    }
    
    for(let i = 0; i < a.length; i++) {
        // asc 코드 비교
        if(a[i].codePointAt() != b[i].codePointAt()) {
            return a[i].codePointAt() - b[i].codePointAt()
        }
    }
}

arr.sort(sortFunc)

// 반복문으로 string += 해주는 것보다는 join이 빠르다.
console.log(arr.join("\n"))

// 어디서 시간 차이가 난걸까.. 