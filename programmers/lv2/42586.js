function solution(p, s) {
        let ans = [];

        while (p.length > 0) {
                // 작업 반영
                for (let i = 0; i < p.length; i++) {
                        if (p[i] < 100) {
                                p[i] = Math.min(p[i] + s[i], 100);
                        }
                }

                console.log(p);

                // 금일 다 된 작업
                let done = 0;

                // 다 안 된 작업이 나올때 까지 다 된 작업 제거
                while (p[0] >= 100) {
                        p.shift();
                        s.shift();
                        done++;
                }

                if (done != 0) {
                        ans.push(done);
                }
        }

        return ans;
}

console.log(solution([93, 30, 55], [1, 30, 5]));
