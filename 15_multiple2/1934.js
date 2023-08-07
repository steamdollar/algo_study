let input = require("fs").readFileSync("/dev/stdin").toString().trim()
.split("\n")

input.shift()

let ans = ""

for(let i = 0; i<input.length; i++) {
    let [a, b] = input[i].split(" ").map(v => +v).sort((a,b) => a-b)
    
    if(b % a == 0) {
        ans += b + "\n"
        continue
    }
    
    let k = 1;
    while(true) {
                
        if((a * k) % b == 0) {
            ans += a*k + "\n"
            k = 1;
            break;
        }
        k++
    }
}

console.log(ans)

// 정수론을 알면 훨씬 빠른 알고리즘을 찾을 수 있을 것 같은데
//( 거의 2~3배, 크게는 4배까지 차이가 나는듯 )
// 난 정수론을 하나도 모른다..
// 나머지 정리같은걸 공부해봐야 하나..?

// 문제에 힌트가 주어져 있다.
// 최대 공약수만 구해도 최소공약수를 알 수 있다고 해서 검색해봄
// A = G * a
// B = G * b
// 그럼 L = G * a * b

// A * B = G * G * a * b = G * L
// A * B = G * L

// 이런걸 학교다닐 때 배웠었나? 왜 기억이 안나지..