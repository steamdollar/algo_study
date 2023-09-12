
// + 그냥 복붙해서 쓰다가 + 붙인걸 안떼서 계속 틀렸다..
let input = require("fs").readFileSync("/dev/stdin").toString().trim()
.split("\n")

const recursion = (s, l, r, count) => {
        count++
        if(l >= r) {
                return [1, count]
        } else if (s[l] !== s[r]) {
                return [0, count]
        } else {
                return recursion(s, l+1, r-1, count)
        }
}

const isPalindrome = (s, count) => {
        return recursion(s, 0, s.length-1, count)
}

let ans = ""

for(let i = 1; i < input.length; i++) {
        let [is, c] = isPalindrome(input[i], 0)    
        ans += is + " " + c + "\n"  
}

console.log(ans)