// 2023.08.01 - Dictionary
// 관련 문제 : 13_sort/18870.js

// 객체처럼 k - v로 저장을 하고, 인덱스보다 k로 접근하기 때문에
// (즉, 특정 순서대로 데이터를 리턴하지 않음)
// 원하는 값을 빠르게 가져올 수 있다고 한다.
// 중복될 수 없음.
// 사실 객체랑 거의 동일하지만 굳이 약간 다른 점을 찾아보자면

// 1. key type
// 객체는 string, symbol등을 key로 가지지만, dictionary는 보통 string만을 사용

// 2. Purpose
// Dictionary는 key에 기반해 데이터를 저장하고 접근하는 기능을 제공하는데
// 초점이 맞춰져 있고, obj는 그보다 더 광범휘하게 사용된다.


// 1. dictionary 생성
let dic1 = {"name" : "lsj", "job" : "developer", "age" : 30}

console.log(dic1)
// { name: 'lsj', job: 'developer', age: 30 }

// 2. k -v pair 추가
dic1["hobby"] = "game"
dic1["gender"] = "male"

console.log(dic1)
// { ... hobby : "game", gender : "male"}

// 3. k-v pair 제거
delete dic1['age']
console.log(dic1)
// { name: 'lsj', job: 'developer', hobby: 'game', gender: 'male' }

// 막상 하고보니 객체랑 큰 차이가 없어서 정리할게 없다.