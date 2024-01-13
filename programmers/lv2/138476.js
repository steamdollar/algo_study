function solution(k, t) {
        let ans = 0;

        let arr = new Array(t.sort((a, b) => a - b)[t.length - 1] + 1).fill(0);
        for (let i = 0; i < t.length; i++) {
                arr[t[i]]++;
        }
        arr = arr.map((i, v) => `${v}*${i}`);

        arr.sort((a, b) => b.split("*")[1] - a.split("*")[1]);

        for (let i = 0; i < arr.length; i++) {
                let temp = +arr[i].split("*")[1];

                k -= temp;
                ans++;
                if (k <= 0) break;
        }

        return ans;
}

// console.log(solution(6, [1, 3, 2, 5, 4, 5, 2, 3]));
// console.log(solution(4, [1, 3, 2, 5, 4, 5, 2, 3]));
// console.log(solution(2, [1, 1, 1, 1, 2, 2, 2, 3]));
console.log(solution(1, [1000, 2000, 2000, 1000]));
