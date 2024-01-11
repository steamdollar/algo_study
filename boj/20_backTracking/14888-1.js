// // let input = require("fs")
// //         .readFileSync("/dev/stdin")
// //         .toString()
// //         .trim()
// //         .split("\n");

// let input = `3
// 3 4 5
// 1 0 1 0`.split("\n");

// let [N, nums, ops] = input;

// let numsArr = nums.split(" ").map((v) => +v);
// // let numArr = new Array(nums.split(" ").length * 2 - 1);

// // for (let i = 0; i < numArr.length; i = i + 2) {
// //         numArr[i] = nums.split(" ")[i / 2];
// // }

// let opArr = ops.split(" ").map((v) => +v);
// let ansArr = [];
// // 연산자 순서 정하는 함수 (재귀 함수여야 할 듯)
// const org = (opArr) => {
//         let cnt = 0;

//         if (ansArr.length == numsArr.length - 1) {
//                 return ansArr;
//         } else {
//                 for (let i = 0; i < opArr.length; i++) {
//                         if (opArr[i] == 0) continue;
//                         else {
//                                 opArr[i]--;
//                                 ansArr.push(i);
//                                 org(opArr);

//                                 opArr[i]++;
//                         }
//                 }
//         }
// };

// console.log(org(opArr));
console.log(0);
