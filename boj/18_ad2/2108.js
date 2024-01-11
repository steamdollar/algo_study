let input = require("fs").readFileSync("/dev/stdin").toString().trim()
.split("\n").map(v => +v)

input.shift()

// 배열 가지고 이러는건 시간초과가 날 것 같긴 한데..

const sortFunc = (a,b) => {return (a-b)}

const avg = (arr) => {
        let sum = 0
        for(let i = 0; i < arr.length; i++) {
                sum += arr[i]
        }
        return Math.round(sum/arr.length)
}

const mid = (arr) => {
        const sorted = arr.sort(sortFunc)
        return sorted[(sorted.length - 1) / 2]
}

const freq = (arr) => {
        let tempMap = new Map()
        for(let i = 0; i < arr.length; i++) {
                if(!tempMap.has(arr[i])) {
                    tempMap.set(arr[i], 1)    
                } else {
                        let prev = tempMap.get(arr[i])
                        
                        tempMap.set(arr[i], prev+1)
                }
        }
        
        let max = 0
        tempMap.forEach((v) => {
                if(v > max) {
                        max = v
                }
        })
                  
        let temp = []
        
        tempMap.forEach((v, k) => {
                if( v === max ) {
                        temp.push(k)        
                }
        })
        
        temp.sort(sortFunc)
        
        if(temp.length === 1) {
                return temp[0]
        } else {
                return temp[1]
        }
}

const range = (arr) => {
        
        let max = Math.max(...arr)
        let min = Math.min(...arr)
        
        return max - min
}

let ans = ""

ans += avg(input) + "\n"
ans += mid(input) + "\n"
ans += freq(input) + "\n"
ans += range(input)

console.log(ans)

// 풀이가 썩 맘에 들지는 않는다.
// 최빈수 구하는게 그닥 엘레강트하지 않아보임. 