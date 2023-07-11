const input = require("fs").readFileSync("/dev/stdin").toString().trim()

const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n"
, "o", "p", "q", "r", "s", 't', "u", "v", "w", "x", "y", "z"]

let ans_arr = []

outer : for ( let i = 0; i < alphabet.length; i++) {
    if(!input.includes(alphabet[i])) {
        ans_arr.push(-1)
    }
    
    for(let j = 0; j < input.length; j++) {
        if(input[j] == alphabet[i]) {
            ans_arr.push(j)
            continue outer;
        }
    }
}

console.log(ans_arr.join(" "))