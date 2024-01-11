let input = 5;
function solution(input) {
        let memo = [0, 1];

        for (let i = 2; i <= input; i++) {
                // 재귀 함수는 스택 용량을 초과해서 못씀
                // 미리 나눈 값을 저장하지 않으면 오버 플로우가 터질거임.
                memo.push((memo[i - 1] + memo[i - 2]) % 1234567);
        }

        return memo[memo.length - 1];
}

console.log(solution(input));
