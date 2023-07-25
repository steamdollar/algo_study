let [a, b, c, d, e, f] = require("fs").readFileSync("/dev/stdin").toString().trim()
.split(" ").map(Number)

for( let x = -999; x <= 999; x++ ) {
    for(let y = -999; y <= 999; y++) {
        if(a*x+b*y ==c && d*x + e*y == f) {
            console.log(x,y)
            break;
        }
    }
}

// 너무 노가다 식인것 같은데..