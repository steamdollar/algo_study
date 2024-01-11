let input = require("fs").readFileSync("/dev/stdin").toString().trim()
.split("\n")

let [, M] = input[0].split(" ").map(Number)
let arr = input[1].split(" ").map(Number)

let diff
let ans

for(let i = 0; i < arr.length; i++) {
    for(let j = i+1; j < arr.length; j++) {
        for(let k = j+1; k < arr.length; k++) {
            let sum = arr[i] + arr[j] + arr[k]
            if(diff == undefined) {
                if (M-sum >= 0) {
                    diff = M - sum
                    ans = sum    
                }
            }
            if( M - sum >= 0 && M - sum < diff) {
                diff = M - sum
                ans = sum
            }
        }
    }        
}

console.log(ans)