let [m, n] = require("fs")
        .readFileSync("/dev/stdin")
        .toString()
        .trim()
        .split("\n");

let length = +m.split(" ")[0];
let num = +m.split(" ")[1];
let arr = n.split(" ").map((v) => +v);

let max = 0;

for (let i = 0; i < num; i++) {
        max += arr[i];
}

let init = max;

for (let i = num; i < length; i++) {
        init -= arr[i - num];

        init += arr[i];

        if (max < init) {
                max = init;
        }
}

console.log(max);

// 왜 시간 초과가 안나는거지..
