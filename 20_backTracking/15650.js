const [n, m] = require("fs")
        .readFileSync("/dev/stdin")
        .toString()
        .trim()
        .split(" ")
        .map((v) => +v);

let seq = new Array(m).fill(null);
let used = new Array(n).fill(false);

let ans = "";

const sequencer = (k, c) => {
        if (k === m) {
                ans += seq.join(" ") + "\n";
                return;
        }

        for (let i = c; i <= n; i++) {
                if (!used[i - 1]) {
                        seq[k] = i;
                        used[i - 1] = true;

                        sequencer(k + 1, i);

                        used[i - 1] = false;
                }
        }
};

sequencer(0, 1);
console.log(ans);
