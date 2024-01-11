// let input = require("fs").readFileSync("/dev/stdin").toString().trim()
let input = `5
-1 1
0 0
3 2
2 2
-2 3
3 -1`.split("\n")

input.splice(0, 1)

let arr = []

for (let i = 0; i < input.length; i++) {
    arr.push(input[i].split(" ").map(Number))
}

// sort 함수는 특정 기준에 따라 두 element의 순서를 정하는걸 반복함.
// 두 개 이상의 기준을 가지고 비교할 경우에도 함수 하나로 해줄 수 있다.
const sortFunc = (a,b) => {
    // y 좌표가 다르다면 y를 비교
    if(a[1] != b[1]) {
        return a[1] - b[1]
    }
    // y좌표가 같다면 x좌표 비교
    return a[0] - b[0]
}

arr.sort(sortFunc)


let ans = ""
for(let i = 0; i < arr.length; i++) {
    ans += `${arr[i][0]} ${arr[i][1]}\n`
}

console.log(ans)
// sort method의 인자로 들어가는 callback에 대해 좀 더 공부해봐야 할 것 같다.