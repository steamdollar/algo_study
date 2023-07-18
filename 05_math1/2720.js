let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")


let ans = []

for (let i = 1; i < input.length; i++) {
    let money = input[i]
    let unit = [25, 10, 5, 1]
    let numbers = []
    
    for (let j = 0; j < unit.length; j++) {
        numbers.push(Math.floor(money/unit[j]))
        money -= Math.floor(money/unit[j]) * unit[j] 
    }
    
    ans.push(numbers)
}

for(let i = 0; i < ans.length; i++) {
    console.log(ans[i].join(" "))
}