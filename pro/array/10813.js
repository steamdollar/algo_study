/*
    도현이는 바구니를 총 N개 가지고 있고, 각각의 바구니에는 1번부터 N번까지 번호가 매겨져 있다.
    
    바구니에는 공이 1개씩 들어있고, 
    
    처음에는 바구니에 적혀있는 번호와 같은 번호가 적힌 공이 들어있다.
    
    // 
    
    앞으로 M번 공을 바꾸려고 한다. 
    
    공을 바꿀 바구니 2개를 선택하고, 두 바구니에 들어있는 공을 서로 교환한다.

    공을 어떻게 바꿀지가 주어졌을 때, 
    
    M번 공을 바꾼 이후에 각 바구니에 어떤 공이 들어있는지 구하는 프로그램을 작성하시오.
*/

// \n을 /n으로 써놓고 몰라서 한참 헤맴..
const input = require("fs").readFileSync("/dev/stdin").toString().split("\n")

const [N, M] = input[0].split(" ")

let ansArr = new Array(Number(N))
for(let i = 0; i < ansArr.length; i++) {
    ansArr[i] = i+1
}

for(let i = 1; i < input.length; i++) {
    // 원소에 하나 하나 Number(x) 걸지말고 .map을 이용하면 한 번에 바꿔줄 수 있음
    let [a, b] = input[i].split(" ").map(Number)
    temp = ansArr[a-1]
    ansArr[a-1] = ansArr[b-1]
    ansArr[b-1] = temp
}

// 배열의 모든 원소를 string으로 이어붙이는 `join`문
console.log(ansArr.join(" "))