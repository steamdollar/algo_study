const [n, m] = require("fs")
        .readFileSync("/dev/stdin")
        .toString()
        .trim()
        .split(" ")
        .map((v) => +v);

// 중복 허용, 대소 관계 유지

let seq = new Array(m).fill(null);

let ans = "";

const choose = (k, min) => {
        if (k === m) {
                ans += seq.join(" ") + "\n";
                return;
        }

        for (let i = min; i <= n; i++) {
                seq[k] = i;
                choose(k + 1, seq[k]);
        }
};

choose(0, 1);
console.log(ans);
