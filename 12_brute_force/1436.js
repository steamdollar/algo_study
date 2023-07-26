// const N = Number(require("fs").readFileSync("/dev/stdin").toString().trim())
// 이젠 보자마자 딱 아이디어가 떠오르는 단계는 지났다..
// 어느 정도 생각을 해서 아이디어를 떠올려야 한다..

// 666이 포함된 n번째 숫자열 찾기

// 666부터 시작해 1씩 올려가면서
// 문자열이 조건에 맞는지 확인,

// 맞다면 count를 올려주고,
// count가 n과 같아지면 종료

// 조건이 맞는지는 어떻게 확인하나?
// split해서 배열에 연속으로 6이 3개 이상 있으면 될 것 같다.
let N = 60

const isDoom = (num) => {
    // 조건 만족시 true, vice versa
    // let numArr = num.toString().split("")
    // for(let i = 0; i < numArr.length-2; i++) {
    //     // 왜 이렇게 해도 되는지 언어화 할 것
    //     if(numArr[i] == "6" && numArr[i+1] == "6" && numArr[i+2] == "6") {
    //         return true
    //     }
    // }
    
    // 위에 것도 되긴 하는데.. 그냥 includes 쓰는게 빠르다.
    if(num.toString().includes("666")) {
        return true
    }
    
    return false
}
// 같은 수가 반복되지 않으므로 666을 포함하는지 여부만 확인하면 된다.
// 중복 카운트가 생길 경우도 없고, 666이 어디 있는지도 알 필요 없음.


let count = 0
let i = 666


while(true) {
    if (isDoom(i) == true) {
        count++
    }
    
    if (N == count) {
        console.log(i)
        break;
    }
    i++
}