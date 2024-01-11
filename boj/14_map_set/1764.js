let input = require("fs").readFileSync("/dev/stdin").toString().trim()
.split("\n")

let [N, M] = input[0].split(" ").map(Number)

let arr1 = []
for(let i = 1; i <= N; i++) {
    arr1.push(input[i])
}

let set1 = new Set([...arr1])

let arr2 = []
for(let i = N+1; i < input.length; i++) {
    arr2.push(input[i])
}

let set2 = new Set([...arr2])

let intersection = new Set([...set1].filter((v) => set2.has(v)))

let interArr = Array.from(intersection)

interArr.sort()

let ans = ""

ans += intersection.size + "\n"

for(let i =0; i < interArr.length; i++) {
    ans += interArr[i] + "\n"
}
console.log(ans)

// 배열과 반복문을 많이 사용하는데도 잘 되네..