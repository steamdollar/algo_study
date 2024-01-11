let input = +require("fs").readFileSync("/dev/stdin").toString().trim()

const factorial = (n) => {
        if(n === 0 || n === 1) {
                return 1
        } else {
                return factorial(n-1) * n
        }
}

console.log(factorial(input))

// 재귀 함수를 사용할 줄 아냐고 물어보는 문제..