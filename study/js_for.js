// 2023.07.18
// js 반복문들에 대한 학습

// js에서 여러가지 반복문들을 지원하는데,
// 이걸 능숙하게 사용할 수 있어야 할 것 같다.
// for문만 쓰는거보다는 do - while, while, for in 등 다 사용할 수 있는게
// 도움이 될 듯

const drawLine = () => {
        console.log("===========");
};

//
// 1. for
// 이건 아니까 생략

for (let j = 10; j > 0; j = j - 2) {
        console.log(j);
}

drawLine();

//
// 2. label 문
// 반복문이 여러개 있을 경우 (다중 for문도 포함)
// 각각을 구별하기 위해 or 프로그램의 다른 곳에서 식별할 수 있도록
// 이름을 붙여줄 수 있다.

markLoop: for (let i = 0; i < 5; i++) {
        console.log(i);
}

drawLine();

//
// 3. break
// 반복문을 빠져나올 때 사용한다.
// label을 붙이면 어떤 반복문을 빠져나올지도 지정할 수 있음.
// 이건 다중 for문에서 유용하다.

let a = [1, 2, 3, 4, 5];

for (let i = 0; i < a.length; i++) {
        console.log(a[i]);
        if (a[i] == 3) {
                break;
        }
} // 1, 2, 3

drawLine();

// 3-1. break - label
// 특정 반복문을 빠져나오기 위해 label을 활용한다.
let a1 = 0;
let a2 = 0;

outer: while (true) {
        console.log("outer loop: " + a1);
        a1 += 1;
        a2 = 1;
        inner: while (true) {
                console.log("Inner loop : ", a2);
                a2 += 1;
                if (a2 === 4 && a1 === 4) {
                        // 바깥쪽 반복문을 빠져나감
                        break outer;
                        // 안쪽 반복문만 빠져나감. 바깥쪽 루프를 속행
                } else if (a2 === 4) {
                        break;
                }
        }
}

drawLine();

//
// 4. do - while
// 특정 조건이 거짓으로 판별될 때까지 반복한다.
// 단, 조건문을 확인하기 전에 문장을 한 번 실행한다.
// 그 후 조건을 검사하고, 만족한다면 반복..
// 하다가 조건문이 거짓이 되면 빠져나온다.

let i = 0;
do {
        i += 1;
        console.log(i);
} while (i < 5);
// 1 2 3 4 5
// 0은 안나옴. 일단 문장을 실행을 하기 때문에 +1을 먼저하고 출력함
// 5는 나옴. 4에서 1을 올린 다음 그걸 출력하고 조건 만족 여부를 확인하기 때문

drawLine();

//
// 5. while
// 어떤 조건문이 참이라면 문장을 계속해서 수행한다.
let n = 0;
let x = 0;

// n이 3보다 작다면 계속 반복
// n이 3 이상이 되면 탈출
while (n < 3) {
        n++;
        x += n;
}

console.log(x);

// 그렇다고 해도, 무한 루프는 일어나지 않도록 신경써야 한다.
// 조건문이 계속 true라도, break 같은걸 이용해 빠져나올 출구를 만들어놔야 한다.

drawLine();

//
// 6. continue
// 반복문을 다시 시작하기 위해 사용한다.
// continue를 만난 시점에서 현 반복을 종료하고, 바로 다음 반복을 시작함.
// break와 마찬가지로 label을 활용할 수 있다.

let b1 = 0;
let b2 = 0;
while (b1 < 5) {
        b1++;
        // b1이 3이면 이 조건문 다음을 실행하지 않고
        // 바로 다음 반복으로 들어감
        if (b1 == 3) {
                continue;
        }

        b2 += b1;
}

console.log(b2); // b2 = 1 + 2 + 4 = 7

drawLine();

let c = 0;
let d = 0;
checkcandd: while (c < 4) {
        console.log(c);
        c += 1;
        checkd: while (d > 4) {
                console.log(d);
                d -= 1;
                if (d % 2 == 0) {
                        continue checkd;
                }
                console.log(d + "is odd");
        }
        console.log("c =" + c);
        console.log("d =" + d);
}

drawLine();

//
// 7. for - in 문
// 객체의 열거 속성을 통해 지정된 변수를 반복한다.
// key에 초점

drawLine();

let me = {
        name: "lsj",
        age: 30,
        job: "developer",
};

const print_props = (obj) => {
        for (let i in obj) {
                console.log(`${i} = ${obj[i]}`);
        }
};

print_props(me);

drawLine();

// 7-1. for - in w/ array
// 배열에도 적용할 수 있는데 이 경우 key 대신 index를 사용하게 됨.

let arr1 = ["a", "b", "c", "d"];
print_props(arr1, "arr1");

drawLine();

//
// 8. for - of 문
// 각각의 고유한 특성의 값을 실행할 명령과 함께 사용자 지정 반복 hook을 호출
// iterable한 대상(arr, map, set 등)을 통해 loop 생성
// value에 초점

/*
    for(variable of object) {
        statement
    }
*/

let arr2 = [3, 5, 7];

// for - in은 key를 출력 (arr이라면 index)
for (let i in arr2) {
        console.log(i);
}

drawLine();

// for - of는 value를 출력
for (let i of arr2) {
        console.log(i);
}

drawLine();

let temp_set = new Set([1, 2, 3]);

for (let i of temp_set) {
        console.log(i);
}

drawLine();

let temp_map = new Map();

temp_map.set(1, "a");
temp_map.set(2, "b");
temp_map.set(3, "c");

for (let i of temp_map) {
        console.log(i);
}
