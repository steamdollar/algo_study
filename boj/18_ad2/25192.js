let input = require("fs").readFileSync("/dev/stdin").toString().trim()
.split("\n")

// 일정 주기 리셋, 중복 불허라는 측면에서 Set 사용하는게 가장 좋은듯
// 배열이랑 include쓰면 보나마나 시간 초과일거고..
let ans = 0
let temp = new Set()

for(let i = 1; i < input.length; i++) {
        if(input[i] === "ENTER") {
                ans+= temp.size
                temp.clear()
        } else {
                temp.add(input[i])
        }
        
        if(i === input.length-1) {
                ans += temp.size
        }
}

console.log(ans)