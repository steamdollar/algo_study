// 문제
// 지민이는 자신의 저택에서 MN개의 단위 정사각형으로 나누어져 있는 
// M×N 크기의 보드를 찾았다. 어떤 정사각형은 검은색으로 칠해져 있고, 
// 나머지는 흰색으로 칠해져 있다. 
// 지민이는 이 보드를 잘라서 8×8 크기의 체스판으로 만들려고 한다.

// 체스판은 검은색과 흰색이 번갈아서 칠해져 있어야 한다. 
// 구체적으로, 각 칸이 검은색과 흰색 중 하나로 색칠되어 있고, 
// 변을 공유하는 두 개의 사각형은 다른 색으로 칠해져 있어야 한다. 
// 따라서 이 정의를 따르면 체스판을 색칠하는 경우는 두 가지뿐이다. 
// 하나는 맨 왼쪽 위 칸이 흰색인 경우, 하나는 검은색인 경우이다.

// 보드가 체스판처럼 칠해져 있다는 보장이 없어서, 
// 지민이는 8×8 크기의 체스판으로 잘라낸 후에 
// 몇 개의 정사각형을 다시 칠해야겠다고 생각했다. 
// 당연히 8*8 크기는 아무데서나 골라도 된다. 지민이가 다시 칠해야 하는 정사각형의 최소 개수를 구하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 N과 M이 주어진다. 
// N과 M은 8보다 크거나 같고, 50보다 작거나 같은 자연수이다. 
// 둘째 줄부터 N개의 줄에는 보드의 각 행의 상태가 주어진다. B는 검은색이며, W는 흰색이다.

// 출력
// 첫째 줄에 지민이가 다시 칠해야 하는 정사각형 개수의 최솟값을 출력한다.

//let input = require("fs").readFileSync("/dev/stdin").toString().trim()
let input = `10 13
BWBBBBBBWBWBW
BBBBBBBBBWBWB
BBBBBBBBWBWBW
BBBBBBBBBWBWB
BBBBBBBBWBWBW
BBBBBBBBBWBWB
BBBBBBBBWBWBW
BBBBBBBBBWBWB
WWWWWWWWWWBWB
WWWWWWWWWWBWB`.split("\n")

let [M, N] = input[0].split(" ").map(Number)


let board = input.splice(1, input.length)

// 점 하나를 시작점 (맨 왼쪽 위)으로 잡고, 거기서 8*8 범위를 스캔
// 색을 다시 칠해야하는지 확인해 갯수 누적

// 선택할 수 있는 시작점 : 맨 왼쪽 위 (0,0) ~ (M-7, N-7)

let board_2d = []

for(let i = 0; i < board.length; i++) {
    let row = board[i].split("")
    board_2d.push(row)
}


// (0,0) ~ (N-7, M-7) 이 가능한 sp // (10,13)은 (6,3)
// 이 각각의 지점에 대해 시행하면 됨.

// n이 가로, m이 세로
// sp 기준
// [0][0], [0][1], ... [0][7]
// [1][0], ... [1][7]
// 이 점들을 확인해야한다.

let asd = []
for(let i = 0; i < N-7; i++) {
    for (let j = 0; j < M-7; j++) {
        let start = board_2d[i][j]
        
        for(let k = 0; k < 8; k++) {
            for(let l = 0; l < 8; l++) {
                console.log(board_2d[i+k][j+l])
            }
        }
    }
}

// 포기. 도저히 헷갈리고 짜증만 나서 더 못하겠음.