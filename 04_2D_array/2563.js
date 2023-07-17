const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")

// 각 좌표는 정사각형의 시작 좌표를 준다.
// 시작좌표를 통해 끝점 (때각선 반대쪽에 위치한)도 알 수 있음
// (a,b) => (a+10, b+10)
// 정사각형들의 넓이에서 겹치는 부분을 뺀다.
// 겹치는 부분은 정사각형이 (a,b) => (a+10, b+10)까지의 모든 정수 좌표를
// 포함한다는 사실을 이용할 수 있을 것 같음.

let container = []

// 각 시작 좌표 (정사각형) 에 대해 반복
for (let i = 1; i < input.length; i++) {
    const [x, y] = input[i].split(" ").map(Number)
    
    // 개별 정사각형 내부 좌표들에 대해 반복
    for(let j = x; j < x+10; j++) {
        // 좌표를 저장하고, 겹치는 좌표를 다 빼고 싶은데..
        // 이걸 구현할 수 없는 상태
        // 배열의 동일성을 어떻게 체크할까..
        // 그냥 string으로 바꾸면 비교하게 편하네..
        // 이중 배열 카테고리라고 굳이 이중 배열에 얽매일 필요는 없었던 것 같음.
        for(let k = y; k < y+10; k++) {
            let pt = [j, k].toString()
            if(!container.includes(pt)) {
                container.push(pt)
            }
        }
    }
}

console.log(container.length)