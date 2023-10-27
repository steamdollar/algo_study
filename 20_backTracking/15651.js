const [n, m] = require("fs")
        .readFileSync("/dev/stdin")
        .toString()
        .trim()
        .split(" ")
        .map((v) => +v);

// 이번엔 중복 허용이네..
// 대소 관계도 상관 없고..

let seq = new Array(m).fill(null);

let ans = "";

const choose = (k) => {
        if (k === m) {
                ans += seq.join(" ") + "\n";

                return;
        }

        for (let i = 1; i <= n; i++) {
                seq[k] = i;
                choose(k + 1);
        }
};

choose(0);
console.log(ans);
