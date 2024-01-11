let input = require("fs").readFileSync("/dev/stdin").toString().trim()
.split("\n")

input.pop()

let targetSet = new Set(["(", ")", "[", "]", "{", "}"])

let ans = []

for(let i = 0; i < input.length; i++) {
    let stack = []
    let arr = input[i].split("").filter(v => targetSet.has(v))
    
    if(arr.length === 0 ) {
        ans.push("yes")
        continue
    }
    

    for(let j = 0; j < arr.length; j++) {
        if( arr[j] === "(" || arr[j] === "[" || arr[j] === "{") {
            stack.push(arr[j])
        } else if (arr[j] === ")") {
            if(stack[stack.length-1] === "(") {
                stack.pop()
            } else {
                stack.push(arr[j])
            }
        } else if (arr[j] === "]") {
            if(stack[stack.length-1] === "[") {
                stack.pop()
            }else {
                stack.push(arr[j])
            }
        } else if (arr[j] === "}") {
            if(stack[stack.length-1] === "{") {
                stack.pop()
            }else {
                stack.push(arr[j])
            }
        }
    }
    
    if (stack.length === 0) {
        ans.push("yes")
    } else {
        ans.push("no")
    }
}

console.log(ans.join("\n"))

// 특이 사항 없음.
// 닫는 괄호를 추가 할때의 조건을 빼먹어서 틀렸다.
// 여는 괄호와 만나서 서로 소멸하지 않는 경우 (stack에서 pop이 일어나지 않는 경우)
// 에 대한 처리가 부족했음.