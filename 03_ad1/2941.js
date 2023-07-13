const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("")

let len = 0

for(let i = 0; i < input.length; i++) {
    if(input[i] == "c") {
        if(input[i+1] == "=" || input[i+1] == "-") {
            i++
        }
        len++
    } else if(input[i] == "d") {
        if(input[i+1] == "z" && input[i+2] == "=") {
            len++
            i = i + 2
        } else if(input[i+1] == '-') {
            len++
            i++
        } else {
            len++
        }
    } else if (input[i] == "l") {
        if(input[i+1] == "j") {
            i++
        }
        len++
    } else if (input[i] == "s") {
        if(input[i+1] == "=") {
            i++
        }
        len++
    } else if (input[i] == "z") {
        if(input[i+1] == "=") {
            i++
        }
        len++
    } else if (input[i] == "n") {
        if(input[i+1] == "j") {
            i++
        }
        len++
    } else {
        len++
    }
}

console.log(len)