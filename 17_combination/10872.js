let input = Number(require("fs").readFileSync("/dev/stdin").toString().trim())

let v = 1

if(input !== 0) {
    
    while(input > 0) {
        v = v * input
        input--
    }
}

console.log(v)