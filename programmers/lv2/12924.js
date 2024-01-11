let input = 1;

function solution(input) {
        let ans = 1;
        for (let i = 1; i <= Math.floor(input / 2); i++) {
                let sum = 0;
                let j = i;
                while (true) {
                        sum += j;
                        j++;

                        if (sum == input) {
                                ans++;
                                break;
                        } else if (sum > input) {
                                break;
                        }
                }
        }

        return ans;
}

console.log(solution(input));
