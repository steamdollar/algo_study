let [A, B, V] = require("fs").readFileSync("/dev/stdin")
.toString().trim().split(" ").map(Number)

// n번쨰 날에 탈출한다고 하자.
// 그러면 n번째 날 시작 시점에서 높이 h의 범위는
// V-A <= h < V

// (n-1)번째 날까지는 하루에 (A-B) 씩 올라온다고 봐도 된다.
// 즉   V-A <= h = (A-B)(n-1) < V
// (V-A)/(A-B) + 1 <= n < V/(A-B) + 1

console.log((Math.ceil((V-A)/(A-B)) + 1))