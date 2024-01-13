let n = [70, 50, 80, 50, 20];

function solution(n, l) {
        let ans = 0;
        n.sort((a, b) => a - b);

        while (n.length > 2) {
                if (n[n.length - 1] + n[0] > l) {
                        n.pop();
                        ans++;
                } else {
                        n = n.slice(1, n.length - 1);

                        ans++;
                }
        }

        if (n.length == 1) {
                ans++;
        } else {
                if (n[0] + n[1] > l) {
                        ans = ans + 2;
                } else {
                        ans++;
                }
        }

        return ans;
}

console.log(solution(n, 100));
