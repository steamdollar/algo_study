// 2023.08.04 - Map
// related : 14_map_set/1620

//
// 1. Map
// k-v 쌍으로 이루어진 자료구조로, key를 통해 data를 쉽게 접근할 수 있는 자료구조이다.
// key를 이용해 데이터에 빠르게 접근할 수 있음.
// 검색, 삽입, 제거, 존재 여부 확인 모두 O(1)
// 중복을 허용하지 않는다.

//
// 2. 선언
let m = new Map()
console.log(m) // Map(0) {}

// 초기값을 주기싶다면 iterable한 요소를 주면 된다.
// k - v 각각이 필요하므로 1차 배열보다 2차 배열로 인수를 넘겨줘서
// 각 1차 배열의 두 요소가 k, v가 되도록 한다.
let tArr = [[1, "a"], [2, "b"], [3, "c"]]
let m2 = new Map([...tArr])

console.log(m2)
// Map(3) { 1 => 'a', 2 => 'b', 3 => 'c' }


//
// 3. methods

// 3-1. size
// map의 크기를 구한다. 엄밀히 말하면 method는 아니고, map 객체의 속성 중 하나.
let size = m2.size
console.log(size) // 3


// 3-2. get
// k를 인자로 넣어 그 k에 대응하는 v를 가져오는 함수
console.log(m2.get(1)) // a

// key가 해당 map에 없다면 undefined
console.log(m2.get(4)) // undefined


// 3-3. set
// k, v 값을 추가하거나, 이미 k가 있다면 대응하는 v를 변경한다.
m2.set(1, "z")
m2.set(4, "d")

console.log(m2) // Map(4) { 1 => 'z', 2 => 'b', 3 => 'c', 4 => 'd' }


// 3-4. delete
// key를 이용해 해당하는 k-v쌍을 map에서 제거
m2.delete(2)
console.log(m2) // Map(3) { 1 => 'z', 3 => 'c', 4 => 'd' }


// 3-5. has
// 해당 key가 map에 있는지 확인하는 함수
console.log(m2.has(2)) // false
console.log(m2.has(4)) // true


// 3-6. clear
// map의 모든 key를 제거해 빈 map을 만들어줌.
m2.clear()
console.log(m2) // Map(0) {}

//

let m3 = new Map([...tArr])
console.log(m3)

//
// 3-7. 반복문
// for - of문을 이용해 ket ,value를 출력 가능

for(let [k, v] of m3) {
    console.log(k) 
    console.log(v)
}
// 1
// a
// 2
// b
// 3
// c


// 3-7. forEach
// map에도 foreach가 있다.
// arr과 마찬가지로 모든 요소를 순회하며 액션을 실행해준다.


// forEach method의 인수는 두 개
// callback 함수와 thisArg.
// thisArg는 지금은 몰라도 될 것 같고,

// callback 함수는 각 요소에 대해 실행할 함수로,
// 다시 3개의 인수 v, k, m을 가진다. (전부 optional)
// v, k는 알거고, m은 forEach의 피연산자인 map 자체를 의미함.
m3.forEach((v, k,m) => {
    console.log(v, k, m)
})

// a 1 Map(3) { 1 => 'a', 2 => 'b', 3 => 'c' }
// b 2 Map(3) { 1 => 'a', 2 => 'b', 3 => 'c' }
// c 3 Map(3) { 1 => 'a', 2 => 'b', 3 => 'c' }


//
// 3-8. entries
// map 객체를 [k, v] 쌍을 가진 iterator object로 만들어주는 함수이다.
let iter = m3.entries()
console.log(iter) // [Map Entries] { [ 1, 'a' ], [ 2, 'b' ], [ 3, 'c' ] }
// console.log(typeof(iter)) // object
// 이렇게 만든 Map Entries인 iter는 순회 관련 함수를 사용할 수 있게 됨.

for (let [k, v] of iter) {
    console.log(k, v)
}

// 1 a
// 2 b
// 3 c

//
// 3-9. keys(), values()
// key, value 각각만을 모아 map iterator 생성

let keyIter = m3.keys()
let valueIter = m3.values()

console.log(keyIter) // [Map Iterator] { 1, 2, 3 }
console.log(valueIter) // [Map Iterator] { 'a', 'b', 'c' }