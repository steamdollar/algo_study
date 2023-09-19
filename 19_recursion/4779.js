let input = require("fs")
        .readFileSync("/dev/stdin")
        .toString()
        .trim()
        .split("\n")
        .map((v) => +v);

//
// a(n) = a(n-1) + e(n-1) + a(n-1)
// a(0) = 1
const drawLine = (n) => {
        if (n === 0) {
                return "-";
        }

        const l = 3 ** n;
        // .repeat(n) : 해당 문자열을 원하는 횟수만큼 반복
        return drawLine(n - 1) + " ".repeat(l / 3) + drawLine(n - 1);
};

let ans = "";

for (let i = 0; i < input.length; i++) {
        ans += drawLine(input[i]) + "\n";
}

console.log(ans);

// 재귀는 생각을 코드로 옮기는게 너무 어렵다..
// 점화식으로 일단 표현해보면 좀 생각을 코드로 바꾸는데 징검다리 역할을 해주는 것 같음..
