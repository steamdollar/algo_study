//let input = require("fs").readFileSync("/dev/stdin").toString().trim()
let input =`6
(())())
(((()())()
(()())((()))
((()()(()))(((())))()
()()()()(()()())()
(()((())()(
((
))
())(()`.split("\n")

input.shift()

// 도대체 이게 무슨 말인가 헀는데..
// 왜 이게 stack 카테고리에 있는지를 생각해보자.
// (, )의 수가 같고, 페어링이 잘 되면 vps
// (와 )가 만나서 소멸이 잘 일어나면 됨..

let ansArr = []

// (())())
for(let i = 0; i < input.length; i++) {
    let vsArr = []
    let strs = input[i].split("")
    
    if(strs[0] == ")" || strs.length %2 != 0) {
        ansArr.push("NO")
        continue
    }
    
    for(let j = 0; j < strs.length; j++) {
        if(strs[j] === "(") {
            vsArr.push(strs[j])
        } else {
            if (vsArr[vsArr.length-1] === "(") {
                vsArr.pop()
            } else {
                vsArr.push(strs[j])
            }
        }
    }
    
    if(vsArr.length === 0) { 
        ansArr.push("YES") 
    } else {
        ansArr.push("NO") 
    }
}

console.log(ansArr.join("\n"))