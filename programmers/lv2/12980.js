let n = 5000;

function solution(n) {
        // n => n + k (e = e + k)
        // n => 2n
        let cnt = 0;
        while (n > 0) {
                if (n % 2 == 0) {
                        n /= 2;
                } else {
                        n--;
                        cnt++;
                }
        }
        return cnt;
}

console.log(solution(n));
