let arr = [7, 9, 1, 1, 4];

const arrSum = (arr) => {
        let ans = 0;
        for (let i = 0; i < arr.length; i++) {
                ans += arr[i];
        }
        return ans;
};

function solution(arr) {
        let ans = new Set();

        for (let i = 1; i < arr.length + 1; i++) {
                // start index
                for (let j = 0; j < arr.length; j++) {
                        let stack = [];

                        // 현재 stack 원소 수
                        let cnt = 0;

                        let idx = j;
                        while (cnt < i) {
                                stack.push(arr[idx]);
                                idx++;
                                cnt++;
                                if (idx == arr.length) idx = 0;
                        }
                        ans.add(arrSum(stack));
                }
        }

        return ans.size;
}

console.log(solution(arr));
