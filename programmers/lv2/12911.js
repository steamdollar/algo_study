let input = 78;

function solution(input) {
        let bin = input.toString(2);
        let num1 = 0;
        for (let i = 0; i < bin.length; i++) {
                if (bin[i] == 1) {
                        num1++;
                }
        }

        let init = input;
        while (true) {
                init++;
                let bin2 = init.toString(2);
                let num2 = 0;
                for (let i = 0; i < bin2.length; i++) {
                        if (bin2[i] == 1) {
                                num2++;
                        }
                }
                if (num2 == num1) {
                        return init;
                }
        }
}

console.log(solution(input));
