let input = require("fs").readFileSync("/dev/stdin").toString().trim()
.split("\n").map(Number)

// input.splice(0, 1)

// input.sort((a,b) => b-a)

// console.log(input.join("\n"))

// 이러면 메모리 초과가 나온다.

// 일단 이 문제의 의도는 메모리를 최대한 적게 사용해서
// 원하는 바를 얻는 것임.
// 그래서 범위도 10000 이하 자연수라는 좁은 범위에 들어가 있다.
// C나 go같은 경우 정수의 메모리 사용량을 줄일 수 있는데,
// js는 그런게 없는 것 같음.

// 일단 다른 정렬 메커니즘에 대해 알아보자.
// 데이터의 범위가 좁다면 (1~10000) 이런 범위 조건이 있는 경우에 한해
// 굉장히 빠른 정렬 알고리즘이 존재한다.


// Counting Sort, 계수 정렬이라고 하는데,
// 크기를 기준으로 갯수를 count 한다고 함.
// 크기라고 하긴 조금 범위를 좁히는 감이 있다.
// 데이터의 종류가 적을 경우 그 데이터의 종류를 기준으로 count
// 숫자는 그게 크기가 되고, 문자의 경우 a~z 까지 26개니까
// 그 경우도 동일한 방식을 사용할 수 있겠다.

// 1 ~ 10000까지 있고,
// 주어진 데이터에 대해 첫 원소부터 쭉 읽으면서 해당 데이터 값의 수를
// 하나씩 늘려가면 됨.

let arr1 = []

for (let i = 0; i < 10000; i++) {
    arr1.push(0)
}

for(let i = 1; i < input.length; i++) {
    // arr1의 input[i] 번째 요소를 ++ 한다.
    arr1[input[i]]++;
}


for(let i = 1; i < arr1.length; i++) {
    // arr[i] 만큼 i를 반복 출력
    let count = 0
    while(count < arr1[i]) {
        console.log(i)
        count++
    }
}

// 다만 이렇게 해도 사이트의 한계로 정답 처리를 받을 수는 없다고 한다.
// 일단 이런게 있다는 걸 알고 넘어가면 될 것 같다.
// 일단은 go로 바꿔서 풀었음