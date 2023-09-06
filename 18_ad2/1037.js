let input = require("fs").readFileSync("/dev/stdin").toString().trim()
.split("\n")

// (자신과 1을 제외한) 약수가 하나라면 보통 소수의 제곱임.
// 하나 있는 약수를 제곱한다.
if(input[0] === "1") {
        console.log(input[1].split(" ") ** 2)
// 약수가 여러개일 경우 그중 가장 큰수 * 가장 작은수를 곱하면 숫자가 나온다.
} else {
        const sortFunc = (a,b) => {return (a-b)}
        
        let sorted = input[1].split(" ").sort(sortFunc) 
        
        console.log(sorted[0] * sorted[sorted.length-1])
}