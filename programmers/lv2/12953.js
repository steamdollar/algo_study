let arr = [1, 2, 3, 4];

function solution(arr) {
        arr = arr.sort((a, b) => b - a);

        let divided = arr[0];
        outer: while (true) {
                for (let i = 0; i < arr.length; i++) {
                        if (divided % arr[i] != 0) {
                                divided += arr[0];
                                continue outer;
                        }
                }

                return divided;
        }
}

console.log(solution(arr));
