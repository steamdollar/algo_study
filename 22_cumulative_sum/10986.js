// let input = require("fs")
//         .readFileSync("/dev/stdin")
//         .toString()
//         .trim()
//         .split("\n");

let input = `5 3
1 2 3 1 2`.split("\n");

const [N, M] = input[0].split(" ").map((v) => +v);
const arr = input[1].split(" ").map((v) => +v);

//
let len = 1;
let ans = 0;

// 이중 반복은 배열 만드는 것도 많고 해서 시간초과가 난다.
// arr.forEach((el) => {
//         for (let j = 0; j < arr.length - len + 1; j++) {
//                 let a = arr.slice(j, j + len);
//                 const sum = a.reduce((acc, cur) => acc + cur);
//                 if (sum % M === 0) ans++;
//         }
//         len++;
// });

// 배열에 하나를 빼고 반대 방향에서 하나를 넣는 큐 같은건?
// 뺄 때 복잡도가 너무 O(N)이라 글쎄..
// 일단 생각나는대로 시도해보자
for (let i = 0; i < arr.length; i++) {
        let blank = arr.slice(0, len);

        for (let j = 1; j < arr.length - len + 1; j++) {
                console.log(blank);
                blank.shift();
                blank.push(arr[j]);
        }
        len++;
}

console.log(ans);
