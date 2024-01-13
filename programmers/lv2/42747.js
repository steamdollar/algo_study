function solution(arr) {
        let ans = 0;

        arr = arr.sort((a, b) => a - b);

        // console.log(arr);
        for (let i = 0; i < arr.length; i++) {
                if (arr.length - i <= arr[i]) {
                        ans = arr.length - i;
                        break;
                }
        }

        return ans;
}

console.log(solution([3, 0, 6, 1, 5]));
