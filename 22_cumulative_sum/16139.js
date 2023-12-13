let input = require("fs").readFileSync("/dev/stdin").toString().trim();

// let input = `seungjaehwang
// 4
// a 0 5
// a 0 6
// a 6 10
// a 7 10`;

let arr = input.split("\n");
let str = arr[0];

let ans = "";

for (let i = 2; i < arr.length; i++) {
        let num = 0;
        let [t, m, n] = arr[i].split(" ");

        for (let j = +m; j <= +n; j++) {
                if (str[j] === t) {
                        num++;
                }
        }
        ans += num + "\n";
}

console.log(ans);
