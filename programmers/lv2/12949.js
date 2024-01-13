function solution(arr1, arr2) {
        // arr1 i1 * j1
        // arr2 i2 * j2
        // ans i1 * j2

        let i1 = arr1.length;
        let j1 = arr1[0].length;

        let i2 = arr2.length;
        let j2 = arr2[0].length;

        // console.log(i1, j1, i2, j2);
        // 3 2 2 2
        let ans = new Array(i1).fill(0).map(() => new Array(j2).fill(0));
        // console.log(ans);
        for (let i = 0; i < arr1.length; i++) {
                for (let j = 0; j < arr2[0].length; j++) {
                        for (let k = 0; k < arr2.length; k++) {
                                ans[i][j] += arr1[i][k] * arr2[k][j];
                        }
                }
        }

        return ans;
}

console.log(
        solution(
                [
                        [1, 4],
                        [3, 2],
                        [4, 1],
                ],
                [
                        [3, 3],
                        [3, 3],
                ]
        )
);

console.log(
        solution(
                [
                        [2, 3, 2],
                        [4, 2, 4],
                        [3, 1, 4],
                ],
                [
                        [5, 4, 3],
                        [2, 4, 1],
                        [3, 1, 1],
                ]
        )
);
