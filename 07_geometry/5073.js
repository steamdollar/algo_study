let input = require("fs").readFileSync("/dev/stdin").toString().trim()
.split("\n")

const result = (arr) => {
    const [a, b, c] = arr.split(" ").map(Number)
    if(a + b <=c || b+c <= a || a+c <= b) {
        return "Invalid"
    } else if(a == b && b == c) {
        return "Equilateral"
    } else if ( (a == b && b != c) || (a == c && c != b) || ( b == c && c != a) ) {
        return "Isosceles"
    } else {
        return "Scalene"
    }
}


for(let i = 0; i < input.length-1; i++) {
    console.log(result(input[i]))
}