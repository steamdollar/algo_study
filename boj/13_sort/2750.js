let input = require("fs").readFileSync("/dev/stdin").toString().trim()
.split("\n").map(Number)

// splice보다 아래 for문이 더 빠르네..

// let arr1 = input.splice(1, input.length)

let arr1 = []
for (let i = 1; i < input.length; i++) {
    arr1.push(input[i])
}

arr1.sort((a,b) => a-b)

for (let i = 0; i < arr1.length; i++) {
    // 이렇게 sort문을 반복문 안에 두면 
    // 코드는 짧을지 몰라도 반복문마다 sort를 수행하게 되서
    // 느려지는 듯
    // console.log(arr1.sort((a,b) => a - b)[i])
    
    // 밖에서 sort하고 안에서는 출력만..
    console.log(arr[i])
}