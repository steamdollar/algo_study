// let numbers = require("fs").readFileSync("/dev/stdin").toString().trim()
let numbers = `4
1 3 5 7`
.split("\n")[1].split(" ").map(Number)

let ans = 0

outer : for (let i = 0; i < numbers.length; i++) {
    if(numbers[i] == 1) { continue; }
    for(let j = 2; j < numbers[i]; j++) {
        if( numbers[i] % j == 0) {
            continue outer;
        }
    }
    ans++
}

console.log(ans)