const [a, b] = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ")

a_reverse = a.split("").reverse().join("")
b_reverse = b.split("").reverse().join("")

if(a_reverse > b_reverse) {
    console.log(a_reverse)
} else {
    console.log(b_reverse)
}