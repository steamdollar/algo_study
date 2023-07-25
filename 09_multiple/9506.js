let input = require("fs").readFileSync("/dev/stdin").toString().trim()
.split("\n").map(Number)

for(let i = 0; i < input.length-1; i++) {
    let factors= []
    let factorSum = 0
    for(let j = 1; j <= input[i]; j++) {
        if(input[i] % j == 0 && j != input[i]) {
            factorSum += j
            factors.push(j)
        }
    }
    
    if(factorSum == input[i]) {
        let ans=""
        for(let j = 0; j < factors.length; j++) {
            ans += `${factors[j]}`
            if( j != factors.length-1) {
                ans += " + "
            }
        }
        console.log(input[i], "=", ans)
    } else {
        console.log(`${input[i]} is NOT perfect.`)
    }
}