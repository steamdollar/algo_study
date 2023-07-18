// let [A, B, V] = require("fs").readFileSync("/dev/stdin")
// .toString().trim().split(" ").map(Number)

let [A, B, V] = "5 1 6".split(" ").map(Number)

// let day = 1
// let h = 0

// while(true) {
//     h += A
//     if(h >= V) {
//         break
//     }
//     h -= B
//     day++
// }

// console.log(day)

// 시간 초과..?
// 어쩐지 쉽다 했다. 
// 이건 문제를 어떻게든 푸는거에 연산을 줄이는것까지 요구한다.
// 위의 무식한 반복문은 사용할 수 없다고 생각하는게 맞을 듯.

// (V-A)지점 이상까지 오는데 걸리는 시간

// 만약 탈출 못하고, 밤에 미끌어진것까지 끝난 시점의 높이가
// (V-A) 이상이라면 그 다음 날에 탈출임.
// 이러려면 이 날 올라간 것까지만 했을 때의 높이는 V미만이어야 하고,
// (V-A+B) 이상이어야 함.

// 정리하자면 낮에 높이가 
// (V-A+B) <= h < V 라면
// 밤에 B씩 미끌어져서 
// (V-A) <= h < (V-B)가 되고
// 이러면 다음 날에 탈출임.

const min_height = (V-A)/(A-B)

console.log(min_height)