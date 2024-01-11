let input = 78;

function solution(input) {
        let bin = input.toString(2);
        let num1 = 0;
        for (let i = 0; i < bin.length; i++) {
                if (bin[i] == 1) {
                        num1++;
                }
        }

        console.log(num1);
}

console.log(solution(input));
