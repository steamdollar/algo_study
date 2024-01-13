function solution(arr) {
        let mapping = new Map();
        for (let i = 0; i < arr.length; i++) {
                if (!mapping.get(arr[i][1])) {
                        mapping.set(arr[i][1], [arr[i][0], "na"]);
                } else {
                        mapping.set(arr[i][1], [
                                ...mapping.get(arr[i][1]),
                                arr[i][0],
                        ]);
                }
        }

        let ans = 1;
        for (let [k, v] of mapping) {
                ans *= v.length;
        }

        return ans - 1;
}

console.log(
        solution([
                ["yellow_hat", "headgear"],
                ["blue_sunglasses", "eyewear"],
                ["green_turban", "headgear"],
        ])
);
