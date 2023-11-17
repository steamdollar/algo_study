// let input = require("fs")
//         .readFileSync("/dev/stdin")
//         .toString()
//         .trim()
//         .split("\n");

let input = `2
5 6
0 0 1 0`.split("\n");

let numbers = input[1].split(" ");
let tools = input[2].split(" "); //  +, -, *, /

const calc = (a, b, op) => {
        switch (op) {
                case "+":
                        return a + b;
                case "-":
                        return a - b;
                case "*":
                        return a * b;
                case "/":
                        return Math.floor(a / b);
        }
};

// 어떻게 해볼까..
// 숫자 순서는 고정이고, 기호를 끼워넣어야 한다.

// max, min 값을 저장해두고
// 부호를 배치하고 계산해서 값이 max, min에 해당한다면 변수 값을 수정한다.
// 한 단계 전으로 돌아와 계산 반복
// 특이 사항이 있다면 기호의 갯수를 맞춰줘야 한다는 건데..
// 중복도 있고.. 사용한거 안한거를 어떻게 표현할 수 있을까..
// 재귀 함수 단원을 다시 봐야하나..
// 골드까진 아니라도 이 정도는 풀고 넘어가고 싶은데..
console.log(calc(3, 2, "/"));
