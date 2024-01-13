let input = "cdcda";
function solution(n, arr) {
        let ans = [];
        let count = 1;

        ans.push(arr[0]);
        count++;

        for (let i = 1; i < arr.length; i++) {
                let comp = ans[ans.length - 1];
                // console.log(ans);
                // console.log(comp.substring(comp.length - 1, comp.length));
                // console.log(arr[i][0]);
                if (
                        arr[i][0] !==
                        comp.substring(comp.length - 1, comp.length)
                ) {
                        // console.log(arr[i]);
                        return [count, Math.floor(arr.length / 3)];
                }

                if (ans.includes(arr[i])) {
                        return [count, Math.floor(arr.length / 3)];
                }
                ans.push(arr[i]);

                count++;

                if (count == n + 1) count = 1;
        }
}

console.log(
        solution(3, [
                "tank",
                "kick",
                "know",
                "wheel",
                "land",
                "dream",
                "mother",
                "robot",
                "tank",
        ])
);
