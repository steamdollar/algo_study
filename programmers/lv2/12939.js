let input = "1 5 3 4";

function solution(input) {
        let arr = input.split(" ").map((v) => +v);
        let sorted = arr.sort((a, b) => a - b);

        let ans = "";
        ans += sorted[0] + " ";
        ans += sorted[sorted.length - 1];
        return ans;
}

console.log(solution(input));
