let input = require("fs").readFileSync("/dev/stdin").toString().trim()
.split("\n")

let dancer = new Set()
let start = false

for(let i = 1; i < input.length; i++) {
        let [a, b] = input[i].split(" ")
        
        // ChongChong이 나올 때까진 아무것도 할 필요 없다.
        if(start === false && a !== "ChongChong" && b != "ChongChong") {
               continue 
        }
        
        // 총총이 나오면 여기부터 추가 시작
        if( a === "ChongChong" || b === "ChongChong") {
                start = true
                dancer.add(a).add(b)
                continue
        }
        
        // a, b 둘 중 하나라도 set에 있으면 나머지를 추가
        if(dancer.has(a) || dancer.has(b)) {
                dancer.add(a).add(b)
        }
}

console.log(dancer.size)