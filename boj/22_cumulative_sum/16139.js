let input = require("fs")
        .readFileSync("/dev/stdin")
        .toString()
        .trim()
        .split("\n");

const [str, q] = [input[0], +input[1]];
const arr = [];
const l = str.length;

let memo = [];

const num = 26;

for (let i = 0; i < num; i++) {
        memo[i] = new Array(l).fill(0);
}

for (let i = 0; i < num; i++) {
        for (let j = 0; j < l; j++) {
                memo[i][j] =
                        // 이전 자리까지의 t의 수는 memo[i][j-1]
                        // j가 0인 경우는 그냥 0을 리턴하면 된다.
                        (memo[i][j - 1] ?? 0) +
                        // str의 j번째 자리가 t인지 확인해 맞다면 1을 더한다.

                        // true면 1이 될테고, false면 0이 된다.
                        // 동일 문자라면 배열의 이전 값에서 1을 더하면 되고, 아니면 그대로 가면 된다.
                        +(i == str[j].charCodeAt() - 97);
        }
}

// 그럼 메모 완성
// 메모를 중간중간 생성하는게 아니라 아예 완성하고 시작을 했네

for (let i = 2; i < q + 2; i++) {
        const [t, m, n] = input[i].split(" ");
        const subMemoIndex = t.charCodeAt() - 97;
        // ?? 0을 붙이는 이유는 m = 0인 경우를 대비
        arr.push(memo[subMemoIndex][n] - (memo[subMemoIndex][m - 1] ?? 0));
}

console.log(arr.join("\n"));

// 한 줄 한 줄에 다 배울게 있네..
// 처음엔 짜증이 났는데 어느 샌가 놀라워서 풀이 들여다보고 있게 됨..
