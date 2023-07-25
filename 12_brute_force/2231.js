let N = Number(require("fs").readFileSync("/dev/stdin").toString().trim())
let num = 1

while(true) {
    let arr = num.toString().split("").map(Number)
    let arrSum = 0
    for (let i = 0; i < arr.length; i++) {
        arrSum += arr[i]
    }
    
    if(num + arrSum == N) {
        break;
    }
    
    if ( num >= N) {
        break;
    }
    num++
}

if( num >= N) {
    console.log(0)
} else {
    console.log(num)    
}
