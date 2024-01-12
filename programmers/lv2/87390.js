// function solution(n, l, r) {
//         // let ans = [];

//         let arr2D = new Array(n + 1);

//         for (let i = 0; i < arr2D.length; i++) {
//                 arr2D[i] = [];
//         }

//         for (let i = 0; i < n; i++) {
//                 for (let j = 0; j <= i; j++) {
//                         arr2D[i][j] = i;
//                         arr2D[j][i] = arr2D[i][j];
//                 }
//         }
//         arr2D.pop();

//         // console.log(arr2D);

//         let ans = [];
//         for (let i = 0; i < arr2D.length; i++) {
//                 for (let j = 0; j < arr2D[i].length; j++) {
//                         ans.push(arr2D[i][j] + 1);
//                 }
//         }
//         return ans.slice(l, r + 1);
// }

// 실제 2중 배열 만들면 메모리 터짐
// 필요한 부분만 가져온다.
// 길이 r-l+1 인 1차 배열을 바로 만들 수 있음
// (a,b)에 있는 원소의 값 = Max(a,b) + 1
// a =
function solution(n, l, r) {
        let ans = [];
        for (let i = l; i < r + 1; i++) {
                // row : 1, 2, 3 ... n
                ans.push(Math.max(Math.floor(i / n), i % n) + 1);
        }
}

console.log(solution(3, 2, 5));

// 1 2 3
// 2 2 3
// 3 3 3

// 12/3223/333

// 3223
