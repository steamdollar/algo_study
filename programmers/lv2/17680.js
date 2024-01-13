function solution(n, arr) {
        if (n == 0) return arr.length * 5;
        if (arr.length == 0) return 0;

        for (let i = 0; i < arr.length; i++) {
                arr[i] = arr[i].toLowerCase();
        }

        let cache = [];

        let t = 0;

        for (let i = 0; i < arr.length; i++) {
                // 캐시에 있는 경우 그걸 사용 후, 순서를 최신화
                if (cache.includes(arr[i])) {
                        t++;
                        cache = cache.filter((v) => v != arr[i]);
                        cache.push(arr[i]);
                } else {
                        // 캐시에 없는 경우
                        // 일단 캐시 갯수를 확인
                        // 자리가 있으면 push
                        // 없으면 제일 낡은걸 뺴고 푸시
                        t = t + 5;
                        if (cache.length < n) {
                                cache.push(arr[i]);
                        } else {
                                cache = cache.slice(1, arr[arr.length]);
                                cache.push(arr[i]);
                        }
                }
                console.log(cache);
        }

        return t;
}

console.log(
        solution(3, [
                "Jeju",
                "Pangyo",
                "Seoul",
                "NewYork",
                "LA",
                "Jeju",
                "Pangyo",
                "Seoul",
                "NewYork",
                "LA",
        ])
);
console.log(
        solution(3, [
                "Jeju",
                "Pangyo",
                "Seoul",
                "Jeju",
                "Pangyo",
                "Seoul",
                "Jeju",
                "Pangyo",
                "Seoul",
        ])
);
console.log(
        solution(2, [
                "Jeju",
                "Pangyo",
                "Seoul",
                "NewYork",
                "LA",
                "SanFrancisco",
                "Seoul",
                "Rome",
                "Paris",
                "Jeju",
                "NewYork",
                "Rome",
        ])
);
console.log(
        solution(5, [
                "Jeju",
                "Pangyo",
                "Seoul",
                "NewYork",
                "LA",
                "SanFrancisco",
                "Seoul",
                "Rome",
                "Paris",
                "Jeju",
                "NewYork",
                "Rome",
        ])
);
console.log(solution(2, ["Jeju", "Pangyo", "NewYork", "newyork"]));
console.log(solution(0, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA"]));
