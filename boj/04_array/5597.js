let input = require("fs").readFileSync("/dev/stdin").toString().split("\n").map(Number)

const arr1 = new Array(30)
for (let i = 0; i < arr1.length; i++) {
    arr1[i] = i + 1
}

let target_nums = []

for ( let i = 0; i < arr1.length; i++) {
    // 배열이 특정 요소를 포함하는지 확인
    // 1~30이 다 있는 배열과 비교해 여기 없는 숫자(안낸 사람 번호)만 가져온다.
    if (!input.includes(arr1[i])) {
        target_nums.push(arr1[i])
    }
}

// 내림차순 정렬
target_nums.sort(function(a,b) { return a-b })

// 출력을 위한 formatting
let ans = ""
for (let i = 0; i < target_nums.length; i++) {
    ans += target_nums[i]+"\n"
}

console.log(ans)