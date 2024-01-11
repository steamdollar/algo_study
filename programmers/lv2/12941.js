let A = [1, 4, 2];
let B = [5, 4, 4];

function solution(A, B) {
        A = A.sort((a, b) => a - b);
        B = B.sort((a, b) => b - a);

        let ans = 0;
        for (let i = 0; i < A.length; i++) {
                ans += A[i] * B[i];
        }

        return ans;
}

console.log(solution(A, B));
