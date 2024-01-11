// let input = require("fs")
//         .readFileSync("/dev/stdin")
//         .toString()
//         .trim()
//         .split("\n");

let input = `3
3 4 5
1 0 1 0`.split("\n");

let numbers = input[1].split(" ").map((v) => +v);
let tools = input[2].split(" ").map((v) => +v); //  +, -, *, /

let max = -1000000007;
let min = 1000000007;

// 연산 함수들을 원소로 가지는 배열
const calc = [
        (a, b) => a + b,
        (a, b) => a - b,
        (a, b) => a * b,
        (a, b) => (a / b < 0 ? Math.ceil(a / b) : Math.floor(a / b)),
];

// 어떻게 해볼까..
// 숫자 순서는 고정이고, 기호를 끼워넣어야 한다.

const dfs = (cnt, result) => {
        // 연산을 다 헀다면 최종 결과를 max, min과 비교 후 교체
        if (cnt === input[0] - 1) {
                max = Math.max(max, result);
                min = Math.min(min, result);
        } else {
                // +, -, *, / 4개 중 남아있는 것들만 하나씩 써본다.
                for (let i = 0; i < tools.length; i++) {
                        // 연산 기호를 다 썻다면 continue
                        if (tools[i] === 0) continue;

                        // 그렇지 않다면 연산 기호를 하나 사용하고 다음 연산 진행
                        tools[i]--;
                        dfs(cnt + 1, calc[i](result, numbers[cnt + 1]));

                        // 재귀적 호출이 끝나고 돌아왔다면 다시 연산 기호를 돌려놓는다.
                        tools[i]++;
                }
        }
};

dfs(0, numbers[0]);

// max, min 값을 저장해두고
// 부호를 배치하고 계산해서 값이 max, min에 해당한다면 변수 값을 수정한다.
// 한 단계 전으로 돌아와 계산 반복
// 특이 사항이 있다면 기호의 갯수를 맞춰줘야 한다는 건데..
// 중복도 있고.. 사용한거 안한거를 어떻게 표현할 수 있을까..
// 재귀 함수 단원을 다시 봐야하나..
// 골드까진 아니라도 이 정도는 풀고 넘어가고 싶은데..

if (max === -0) {
        max = 0;
}

if (min === -0) {
        min = 0;
}

console.log(max);
console.log(min);
