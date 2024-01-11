//let input = require("fs").readFileSync("/dev/stdin").toString().trim()
let input=`4
2
6
12
18`.split("\n")

input.shift()

let points = input.map(v => +v)

let distance = points[points.length-1]-input[0]

// console.log(distance)
// 숫자 간의 차이의 최대공약수를 구해서 간격을 전부 그걸로 맞춰주면 된다.

// let diffSet = new Set()

// for(let i = 0; i < points.length-1; i++) {
//     diffSet.add(points[i+1] - points[i])
// }

let diffArr = []
for(let i = 0; i < points.length-1; i++) {
    diffArr.push(points[i+1] - points[i])
}

// 여러 수의 최대공약수를 어떻게 구하나..
// 이 부분이 어려움..
// 가장 작은 수부터 써서 나눠보고,
// 안되면 걔의 약수로 나누고.. 하는 식으로 해야할 것 같음.

// sort쓰면 안 될 것 같은데.. 안그래도 밑에 반복문도 있는데..
// let gcd = Array.from(diffArr).sort((a,b) => a-b)[0]
// let gcd = Math.min(...diffArr)

// outer :while(gcd != 1){
//     let i = 0
//     for(const num of diffSet) {
//         if(num % gcd != 0) {
//             i++
//         }
        
//     }
//     if (i == 0) break outer;
//     gcd--
// }

// outer :while(gcd > 1){
//     let i = 0
//     for(let k = 0; k < diffArr.length; k++) {
//         if(diffArr[k] % gcd != 0) {
//             i++
//         }
        
//     }
//     if (i == 0) break outer;
//     gcd--
// }

// 유클리드 호제법을 재귀함수적으로 작성
// 지난 문제에서도 이게 하고 싶었음..
const getGcd = (a,b) => {
    if ( a % b == 0 ) {
        return b
    } else {
        return getGcd(b, a % b)
    }
}

let gcd = diffArr[1] - diffArr[0]
// 두 개씩 순차적으로 최대공약수를 구한다..
for( let i = 0; i < diffArr.length -  1; i++) {
    gcd = getGcd(diffArr[i+1], diffArr[i])
}

console.log(gcd)

console.log(distance/gcd - points.length + 1)

// 맞긴 했는데 풀이가 너무 구리다..
// 어디서 시간이 왕창 소모된걸까..
// set 만드는거?
// 중복된 숫자는 필요 없어서 합리적인 판단이라고 생각을 했는데..
// Set 때문은 아니었음..

// 그럼 sort 때문인가?
// 이것도 아닌듯.. 줄긴 하지만 큰 차이가 없다.

// 모든 좌표의 차이값의 최대공약수 구하는 알고리즘 자체의 문제인가?
// 사실 이중반복문을 쓰는것도 좀 찜찜하고
// gcd를 1씩 계속 감소시킨다는 것도 스마트한 방법은 아님..
