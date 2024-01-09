// let input = require("fs").readFileSync("/dev/stdin").toString().trim();

let input = `seungjaedd
2
e 0 5
e 0 7`;

let arr = input.split("\n");
let str = arr[0];

let ans = "";

// a, b까지의 타깃이 몇개 들어가는지 저장하는 배열을 생성한다.
// 길이 s.length의 배열을 만든다.
// 이 배열의 원소는 각각 s.length개의 원소를 갖는 배열
// s * s 배열
let memo = [];

for (let i = 0; i < str.length; i++) {
        memo[i] = new Array(str.length).fill(null);
}

let newArr = arr.splice(2, arr.length);

// 그냥 구하는 대로 저장하고, 새 값이 나오면 memo중 가장 가까운 값을 사용하면 어떨까

for (let i = 0; i < newArr.length; i++) {
        let num = 0;
        let [t, m, n] = newArr[i].split(" ");

        if (memo[m][n] !== null) {
                ans += memo[m][n] + "\n";
                continue;
        }

        // 우선 m을 보고, 대응하는 배열을 가져온다.
        // memo[m]이겠지?
        // memo[m][x]은 null일수도 있고, 이미 연산을 거쳤다면 숫자일 수도 있음.

        let subMemo = memo[m];

        // 이제 n을 보자.
        // memo[m][x]에서 x가 n과 가장 가까운 x값을 찾을 수 있다. (단, x < n)
        let idx = 0;
        for (let j = 0; j < n; j++) {
                if (subMemo[j] == null) {
                        continue;
                } else {
                        idx = j;
                }
        }
        // 만약 [2][6]를 구하고 싶은데 [2][4]를 가지고 있다면
        // idx = 4가 되고,
        // [4][6]만 구해 [2][4]와 합친 후, [4][6]은 memo한다.
        // console.log(idx);

        // 이어붙일만한게 없다면 처음부터 구하고 메모
        if (idx == 0) {
                for (let j = +m; j <= +n; j++) {
                        if (str[j] === t) {
                                num++;
                        }
                        memo[m][n] = num;
                }
                ans += num + "\n";
                continue;
                // 참고할게 있다면 더 작은걸 구할 수 있게 된다.
        } else {
                for (let j = idx; j <= n; j++) {
                        if (str[j] === t) {
                                num++;
                        }
                }
                memo[idx][n] = num;
                memo[m][n] = memo[m][idx] + num;
                ans += memo[m][n] + "\n";
        }

        // 그럼 거기서부터 시작해 x+1번째 문자부터 n까지의 타깃 문자의 수를 구하면 된다.
        // 만약 그걸 그후마녀 memo[m][n], memo[x+1][n]을 채워넣을 수 있다.
        // 가장 좋은 방법은 아닐 것 같기는 한데 시간은 줄어들 것 같음.

        console.log(memo);
}

console.log(ans);
