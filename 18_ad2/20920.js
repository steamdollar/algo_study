let input = require("fs").readFileSync("/dev/stdin").toString().trim()
.split("\n")

const [, M] = input[0].split(" ")

input.shift()

const filtered = input.filter(v => (v.length >= +M)).sort()

// 단어 횟수가 많을 순, 단어 길이가 긴 순, 알파벳 순으로 배치
// 각 조건을 순서대로 적용해주면 될 것 같긴 하다..

// sort를 여러 번 해야할 때 각 정렬 실행의 순서를 어떻게 맞춰주는가..
// 하는게 핵심이네.
// 어떻게 해줘야 할까..
// 13_sort/11651.js 참조

let tempMap = new Map()

for(let i = 0; i < filtered.length; i++) {
        if(!tempMap.has(filtered[i])) {
                tempMap.set(filtered[i], 1)
        } else {
                let prev = tempMap.get(filtered[i])
                tempMap.set(filtered[i], prev+1)
        }
}

let con1 = []

tempMap.forEach((v,k) => {
        con1.push([v,k])
})


const sortFunc = (a,b) => {
        // 조건의 역순으로 비교 기준을 제시해야 함.
        
        // 조건 3 : 단어 출현 횟수
        if(a[0] !== b[0]) {
                return b[0] - a[0]
        }
        
        // 조건 2 : 단어 길이
        if(a[1].length !== b[1].length) {
                return b[1].length - a[1].length
        }
        
        // 조건 1 : 알파벳 순
        if(a[1][0] !== b[1][0]) {
                return a[1][0] - b[1][0]
        }
 
}

let ans = con1.sort(sortFunc).map(v => v[1])

console.log(ans.join("\n"))

// 배열을 꽤 많이 사용한 것 같은데 시간 초과가 나지 않았다.
// 언제 시간 초과가 나고 언제 안 나는지 아직 직관적으로 맞추기가 힘들다..
// 하긴 테스트 셋에 따라 달라지니 내가 고민을 해도 별 수 없긴 할것 같다.
// 그냥 너무 배열에 의존하지 말고 시간 복잡도도 적당히 신경쓰면서 하면 될 듯..