const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")

// group number의 수 카운터
let num = 0

// 각 글자를 이 후의 글자들과 비교해 달라졌다가 다시 같은게 나오면 그룹문자가
// 아니라고 간주
// 한 번 달라지만 changed을 1로 바꾸고, changed이 1인 상태에서
// 다시 같은게 나온다? 이건 그룹 문자가 아니므로 반복문 종료
let changed = 0

// 그룹 문자가 아니라면 false로 바꿔주고, 이 경우 num을 증가시키지 않음
let isGroup = true

// 이 문제 어렵다..
// 각 단어에 대해 반복
outer: for(let i = 1; i <input.length; i++) {
    isGroup = true

    let voca = input[i]
    
    // 단어의 각 문자를 해당 문자 이후의 문자들과 비교
    // 이 반복문을 끝까지 통과했다면 그룹단어가 맞음 > +1 해줘야 함.
    inner : for(let j = 0; j < voca.length; j++) {
        // 각 문자마다 changed 초기화
        changed = 0
        
        // 이후의 문자들과 하나씩 비교
        for (let k = j+1; k < voca.length; k++) {    
            if(voca[j] == voca[k]) {
                // 다른 문자가 나온 후 다시 같은 문자가 나왔다면 그룹 문자 아님
                // 이 단어에 대해 반복을 종료.
                if(changed > 0) {
                    isGroup = false
                    break inner;
                }
            // 다른 문자가 나왔다면 changed 값을 추가
            } else {
                changed++
            }
            
        }
    }
    
    if( isGroup == true ) {
        num++
    }

}

console.log(num)