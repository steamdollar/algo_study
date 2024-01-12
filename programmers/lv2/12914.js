let n = 50;

const fibo = (n) => {
        let memo = [0, 1, 2];
        if (n == 1 || n == 2) return memo[n];

        for (let i = 3; i < n + 1; i++) {
                memo[i] = (memo[i - 1] + memo[i - 2]) % 1234567;
        }

        console.log(memo);
        return memo[n];
};

function solution(n) {
        return fibo(n);
}

console.log(solution(n));
