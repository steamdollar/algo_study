function solution(want, number, discount) {
        let list = [];
        let ans = 0;
        outer: for (let i = 0; i < discount.length - 9; i++) {
                list = discount.slice(i, i + 10);
                // console.log(list);
                let mapping = new Map();
                for (let j = 0; j < list.length; j++) {
                        if (!mapping.get(list[j])) {
                                mapping.set(list[j], 1);
                        } else {
                                mapping.set(list[j], mapping.get(list[j]) + 1);
                        }
                }

                // console.log(mapping);

                for (let j = 0; j < want.length; j++) {
                        // console.log(mapping.get(want[j]));
                        // console.log(number[j]);
                        if (mapping.get(want[j]) !== number[j]) continue outer;
                }

                ans++;
        }
        return ans;
}
// filter method를 사용하는게 더 좋은 것 같음.
// 각 want[i]에 대해 그 값과 일치하는 값만 남기도록 list를 filter
// 그 filtered list의 길이가 number[i]와 동일하면 pass

console.log(
        solution(
                ["banana", "apple", "rice", "pork", "pot"],
                [3, 2, 2, 2, 1],
                [
                        "chicken",
                        "apple",
                        "apple",
                        "banana",
                        "rice",
                        "apple",
                        "pork",
                        "banana",
                        "pork",
                        "rice",
                        "pot",
                        "banana",
                        "apple",
                        "banana",
                ]
        )
);
