let s = "}]()[{";

const check = (s) => {
        let arr = s.split("");
        let stack = [];
        // console.log(arr);
        for (let i = 0; i < arr.length; i++) {
                switch (arr[i]) {
                        case ")":
                                if (stack[stack.length - 1] == "(") {
                                        stack.pop();
                                } else {
                                        stack.push(arr[i]);
                                }
                                break;
                        case "}":
                                if (stack[stack.length - 1] == "{") {
                                        stack.pop();
                                } else {
                                        stack.push(arr[i]);
                                }
                                break;
                        case "]":
                                if (stack[stack.length - 1] == "[") {
                                        stack.pop();
                                } else {
                                        stack.push(arr[i]);
                                }
                                break;
                        default:
                                stack.push(arr[i]);
                                break;
                }
                // console.log(stack);
        }

        // console.log(stack);

        return stack.length == 0 ? true : false;
};

function solution(s) {
        // 검사 > 회전 반복
        //console.log(check(s));
        let cnt = 0;
        for (let i = 0; i < s.length; i++) {
                if (check(s) == true) {
                        cnt++;
                }

                s = s.substring(1, s.length) + s[0];
                // console.log(s);
        }
        return cnt;
}

console.log(solution(s));
