let input = "110010101001";
// let input = "for the last  wEek";

function solution(s) {
        let cur = s;
        let cnt = 0;
        let el = 0;

        while (true) {
                console.log(cur);
                let next = "";
                for (let i = 0; i < cur.length; i++) {
                        if (cur[i] == 1) {
                                next += cur[i];
                        } else {
                                el++;
                        }
                }
                ans = next.length.toString(2);

                cur = ans;
                cnt++;

                if (cur == "1") break;
        }
        return [cnt, el];
}

console.log(solution(input));
