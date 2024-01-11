// let [a,b] = require("fs").readFileSync("/dev/stdin").toString().trim()
let [a, b] =`3 16`.split(" ").map(v => +v)

const prime = { 1: true };

for (let i = 2; i <=Math.sqrt(b); i++) {
    if (prime[i]) {
        continue;
    }
    
    // i^2, (2i)^2, ... 이런식으로 합성수를 걸러냄
    for (let j = i ** 2; j <= b; j += i) {      
        prime[j] = true;
    }
}

const results = [];
 
for (let i = a; i <= b; i++) {
    if (!prime[i]) {
        results.push(i);
    }
}
 
console.log(results.join("\n"));

// 이 풀이는 소수가 아닌 수를 구한 후, 그걸 범위에서 제외하는 방식을 사용했음.
