const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("")

const rev = [...input].reverse()

let j=0

for( let i = 0; i < input.length; i++) {
    if(input[i] != rev[i]) {
        j++
    }
}

if( j != 0) {
    console.log(0)
} else {
    console.log(1)
}

// 어렵지 않은 문젠데 정확히 모르는 개념들이 있어서 혼자
// 막 복잡해져서 오래걸림..

/*

1. break vs continue
    - break : 가장 가까운 반복문을 아예 벗어남
    - continue : 해당 반복을 종료하고 다음 반복을 수행 시작
*/

/*

2. 배열의 동일성

let arr1 = ["a", "b", "c"]
let arr2 = ["a", "b", "c"]

console.log(arr1 == arr2) // false
왜 false가 뜨냐? 이때 arr1, arr2의 값들을 비교하는게 아니라
메모리 주소를 비교하기 때문.

//

// let arr1 = [1, 2, 3]

// // 얕은 복사
// arr2 = arr1

// console.log(arr2)
// console.log(arr1 == arr2) // true

// // 얕은 복사는 메모리를 따로 쓰지 않으므로 같다고 나옴.

// // 동일 메모리를 공유하므로 arr2를 바꾸면 arr1도 바뀐다.
// arr2[1] = 4

// console.log(arr1)

// // 깊은 복사
// arr3 = [...arr1]

// console.log(arr3)
// console.log(arr1 == arr3) // falase
// // 깊은 복사는 메모리를 따로 사용하게 되므로 메모리 주소가 다르고, 
// // 동일성 비교시 다르다고 나옴.

// arr3[0] = 5

// // arr3의 값을 바꿔도 arr1에는 영향이 없음
// console.log(arr1)

// // reverse

// let arr4 = [1, 2, 3]

// // reverse()는 배열이 저장된 메모리를 직접 수정한다.
// console.log(arr4.reverse())
// console.log(arr4) // [3, 2, 1]

*/