// let input = require("fs").readFileSync("/dev/stdin").toString().trim()
let input=`5
4
8
10
12
100`.split("\n").map(v => +v)

input.shift()

// 배열에서 가장 큰 요소를 찾는 함수가 있다.
let max = Math.max(...input)

// sieve를 사용할거라면 
// 디폴트를 false보다 true로 놓고
// 소수가 아닌 숫자들을 순차적으로 false로 바꿔주는게
// 체의 메커니즘에 부합하는 듯
// 소수를 일일히 찾을거면 false로 놓고 true로 바꿔가는게 맞고.
let store = new Array(max+1).fill(true)

// 0, 1은 소수 아님
// 사실 0이야 없어도 되는데 index떄문에 헷갈려서 넣어줌
store[0] = false 
store[1] = false

// 에라토스테네스의 체를 제대로 코드화해보자.
// 2부터 시작해 sqrt(max) 까지 각각의 배수를 전부 제거 (false로 변경)
for(let i = 2; i**2 <= max; i++) {
    // i = 2라면 2, 2*2, 2*3, ... 제거
    // 이를 모든 i에 대해 반복
    if(store[i]) {
        for(let j = 2; j*i <= max; j++) {
            store[i*j] = false
        }
    }
}

let ans = []

for(let i = 0; i < input.length; i++) {
    let count = 0
    for(let j = 2; j <= input[i]/2; j++) {
        if(store[j] && store[input[i]-j]) {
            count++
        }
    }
    ans.push(count)
}

console.log(ans.join("\n"))