let input = +require("fs").readFileSync("/dev/stdin").toString().trim()

const fibo = (n) => {
        if(n === 0) return 0
        if(n === 1 || n === 2) return 1
        
        return fibo(n-1) + fibo(n-2)
}

console.log(fibo(input))

// n === 0 인 경우를 생각하지 않으면 stack size exceed라고 틀리는데,
// 문제에서 a0 = 0이라고 조건을 줬음..
// 그래서 fibo(0) 을 호출하면 무한 루프를 돌다 터진다. 