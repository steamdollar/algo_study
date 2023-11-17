// 재귀함수 관련 단원으 너무 화가 나서 하기가 싫어진다.
// 다른것부터 하고 돌아가기로 하자.

let input = require("fs")
        .readFileSync("/dev/stdin")
        .toString()
        .trim()
        .split("\n");

// let input = `5 3
// 5 4 3 2 1
// 1 3
// 2 4
// 5 5`.split("\n");

let nums = input[1].split(" ").map((v) => +v);

// 왜 부분합을 영어로 하면 cumulative sum = 누적합일까?
// 를 생각해보면 도움이 된다.

let acc = [0];

let sum = 0;
// 여기가 구리네..
// 이러면 반복되는 연산이 너무 많잖아.
for (let i = 0; i < nums.length; i++) {
        sum += nums[i];

        acc[i + 1] = sum;
}

let ans = "";

for (let i = 2; i < input.length; i++) {
        let [a, b] = input[i].split(" ").map((v) => +v);

        if (a === b) {
                ans += nums[a - 1] + "\n";
        } else {
                ans += acc[b] - acc[a - 1] + "\n";
        }
        // 무지성 더하기는 안됨.. 약간 더 스마트한 방법..
        // let sum = 0;
        // for (let j = a; j <= b; j++) {
        //         sum += nums[j - 1];
        // }
        // ans += sum + "\n";
}

console.log(ans);
