let [n, m] = require("fs")
        .readFileSync("/dev/stdin")
        .toString()
        .trim()
        .split(" ")
        .map((v) => +v);

// 선택한 m개의 원소를 저장하는 배열
let num = new Array(m).fill(null);

// 원소가 true면 그 원소의 idx에 해당하는 숫자는 사용된 것.
let used = new Array(n).fill(false);

let result = "";

const com = (k) => {
        if (k === m) {
                result += num.join(" ") + "\n";
                return;
        }

        for (let i = 1; i <= n; i++) {
                if (!used[i]) {
                        num[k] = i;
                        used[i] = true;

                        // 재귀적 호출
                        com(k + 1);

                        // 함수가 종료되어 이 라인이 실행된다면,
                        // 다시 이전 상태로 되돌린 것이므로 true로 바꾼걸 다시 false로 (사용하지 않은 상태) 돌림
                        used[i] = false;
                }
        }
};

com(0);
console.log(result);

// 간단한 함수 하나면 되는걸 전혀 아이디어조차 떠올리지 못했음.
// 공부가 따로 필요한 모르면 맞아야 하는 영역인것 같기도 하지만
// 재귀 함수는 정말 잘 쓰는 방법을 모르겠다.
// 괜히 전 챕터에 재귀 함수를 깔아둔게 아닌듯.
