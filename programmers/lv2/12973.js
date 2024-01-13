let input = "cdcda";
function solution(input) {
        let stack = [];

        for (let i = 0; i < input.length; i++) {
                if (stack[stack.length - 1] == input[i]) {
                        stack.pop();
                } else {
                        stack.push(input[i]);
                }
        }

        return stack.length == 0 ? 1 : 0;
}

console.log(solution(input));
