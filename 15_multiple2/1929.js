// let [a,b] = require("fs").readFileSync("/dev/stdin").toString().trim()
let [a, b] =`3 16`.split(" ").map(v => +v)

// let setA = new Set()
let arrA = []

// for(let i = 2; i <=b; i++) {
//     setA.add(i)
// }

// for(let i = 2; i <=b; i++) {
//     arrA.push(i)
// }

// for(let i = 2; i<=Math.sqrt(b); i++) {
//     for(const num of setA) {
//         if(num % i == 0 && num != i) {
//             setA.delete(num)
//         }
//     }
// }


const isPrime = (n) => {
    let ans = false
    
    if(n === 0 || n === 1 ) {return false}
    if (n === 2) {return true}
    
    let i = 2

    while(true) {
        if(n % i == 0 ) {
            break;
        }
        if(i**2 >= n) {
            ans = true
            break;
        }
        i++
    }
    return ans
}

for(let i = a; i <=b; i++) {
    if(isPrime(i)) {
        arrA.push(i)
    }
}

console.log(arrA.join("\n"))

// for(const num of setA) {
//     if(num < a) {
//         setA.delete(num)
//     }
// }

// let ansArr = Array.from(setA)

// console.log(ansArr.join("\n"))

// 메모리도 많이 썻고, 시간도 많이 걸렸다.
// 근데 다른 사람들보면 에라토스테네스의 체 안쓴것 같은데..
// 그냥 소수 판별하는 함수를 사용하는게 메모리, 시간 모두 좋게 나왔음.
// 왜일까.. 이론적으로는 체를 사용하는게 더 빠른데 내가 코드를 이상하게 짯나..
// set을 사용한게 원인중 하나일까.. 굳이 set을 사용할 범위는 아닌 것 같기도 하고..
// 배열로 slice 신나게 하면 이건 시간 초과.. 역시..

// 좀 좋아보이는 풀이의 경우도 일단 1~ b까지의 소수를 다 모은 후,
// 그 중 범위 내의 소수만 가져왔음

