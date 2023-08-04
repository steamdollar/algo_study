//let input = require("fs").readFileSync("/dev/stdin").toString().trim()
let input =`5
6 3 2 10 -10
8
10 9 -5 2 3 4 5 -10`.split("\n")

input.shift()
input.splice(1, 1)

let set = new Set (input[0].split(' '))
let arrB = input[1].split(' ')

let ans = ""

for(let i = 0; i < arrB.length; i++) {
    // set이 뭔가를 가지고 있는지 찾을 때의 시간 복잡도는 O(1)임.
    if(set.has(arrB[i])) {
        ans += "1 " 
    } else {
        ans += "0 "
    }
}

console.log(ans)


// 반복문을 써본 풀이. 역시나 시간초과로 안 된다.
// 이제 for문, if문 주구장창 써서 풀 시기는 완전히 지나간 듯.
// O(n^2) 인건 대부분 안된다고 봐야 하는 듯
// O(n)도 잘 안 되는 것 같고
// https://www.acmicpc.net/submit/10815/64382572