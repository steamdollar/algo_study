// 2023.07.28 Set (13_sort/1181.js)
// es6에 추가된 `고유한 값`들의 집합을 다루는 자료 구조이다.
// 즉, 중복을 허용하지 않고, 순서가 없이 (배열에서 사용하는 index가 없음) 
// data를 저장함.

//
// 1. set 생성
const emptySet = new Set()
console.log(emptySet)
// Set(0) {}
// 인수를 주지 않으면 빈 set이 만들어진다.

// 배열을 인자로 주면 배열에 담긴 값으로 set이 만들어진다.
const numSet = new Set([1,2,3])
console.log(numSet)
// Set(3) { 1, 2, 3 }

//
// 2.값 추가, 제거
// 각각 add, delete method를 사용한다.
const testSet1 = new Set()
testSet1.add(1).add(true).add(2)
console.log(testSet1)
// Set(2) { 1, true }

testSet1.delete(1)
console.log(testSet1)
// Set(2) { true, 2 }

// 모든 값을 제거 하고 싶다면 clear() method를 사용한다.
testSet1.clear()
console.log(testSet1)
// set(0) {}

//
// 3. 값의 존재 여부, 갯수 확인
// 각각 has() method, size 속성을 사용한다.
const testSet2 = new Set([1, 2, 4])

console.log(testSet2.has(2)) // true
console.log(testSet2.has(3)) // false

console.log(testSet2.size) // 3

//
// 4. set 순회
// for - of 구문을 사용한다.

const testSet3 = new Set([1, 2, 3, 4])

for (const num of testSet3) {
    console.log(num)
}

//
// 5. arr을 set으로 변환
// 변환하고 싶은 arr을 인수로 넣어주면 된다.
// 이 때 중복값이 있다면 전부 제거됨
const testArr = ["a", "b", "c", "c"]
const testSet4 = new Set(testArr)
console.log(testSet4)
// testSet3

//
// 6. set을 arr로 변환
// spread 연산자 혹은 Array.from() method를 사용한다.
const testSet5 = new Set(["x", "y", "z"])

const testArr2 = [...testSet5]
console.log(testArr2)
// [ 'x', 'y', 'z' ]

const testArr3 = Array.from(testSet5)
console.log(testArr3)
// [ 'x', 'y', 'z' ]

// 이를 활용하면 배열에서 중복값 제거에 매우 편리하다.
// 반복문이랑 include 이제 더 이상은 naver..

const numbers = [1,2,2,3,3,4,4,5,6,7]
const unique = [...new Set(numbers)]
console.log(unique) // [1,2,...,7]

//
// 6-1. 두 배열의 교집합, 합집합, 차집합도 구할 수 있음.
const set1 = new Set([1,2,3,4,5])
const set2 = new Set([4,5,6,7,8])

// 합집합
const union = new Set([...set1, ...set2])

// 교집합
const intersection = new Set([...set1].filter((v) => set2.has(v)))

// 차집합
const diff = new Set([...set1].filter((v) => !set2.has(v)))

// 여기까지 한걸 가지고 1181번에 응용해보자.