let [a, b, c] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(Number)

if( a + b + c != 180) {
    console.log("Error")
} else if ( a == b && b == c && a == 60) {
    console.log("Equilateral")
} else if( a+ b + c == 180 && (a == b || b ==c || c == a)) {
    console.log("Isosceles")
} else {
    console.log("Scalene")
}