let input = require("fs").readFileSync("/dev/stdin").toString().trim()
.split("\n")

input.shift()

let line = input[0].split(" ").map(v => +v)

// stack을 두 개 사용해야할 것 같다..
// 근데 이 둘이 시간적으로 분리되어 있으면 안됨..

// 말렸다.. 말로 생각해보자.

// 일단 줄 맨 앞사람이 현재 순서가 아니라면 옆으로 빼야함.
// 계속 빼다가 현재 순서인 사람이 나오면 그 사람은 보내고,
// 다음 순서가 나올때 까지 또 뺀다..

// 그러다보면 옆줄 맨 바깥에 있는 사람이 순서인 경우가 나온다.
// 그러면 옆줄에서 가장 바깥쪽 사람 하나를 뺀다.
// 옆줄 맨 앞사람이 순서가 아니면 줄에서 한명을 다시 옆으로 빼고..

// 이걸 반복하다보면 다 빠지는 경우가 있을 거고, (nice)
// 줄에서 사람이 다 빠졌는데, 옆줄에서 사람이 못 나오는 경우가 있다. (Sad)

let turn = 1
let tempLine = []

// 이 반복문이 한 번에 어디까지를 반복할 것인가를 생각해보자.
// 한 명을 보내는걸 한 단위로 하는지,
// 사람을 움직이는걸 한 단위로 하는지..
// 반복 액션을 여러 단계로 나눌 때 어떤 동작으로 시작해 어떤 동작으로 마무리 되는지..
while(true) {
    
    // 원래 줄 맨 앞사람이 순번이라면 보내고 끝
    if(line[0] === turn) {
        line.shift()
        turn++
        
        // 방금 나간 사람이 마지막이면 Nice
        if(line.length === 0 && tempLine.length === 0) {
            console.log("Nice")
            break;
        }
        continue
    
    // 옆 줄 맨 앞사람이 순번이면 보내고 끝
    } else if(tempLine[tempLine.length-1] === turn) {
        tempLine.pop()
        turn++
        
        // 방금 나간 사람이 마지막이면 Nice
        if(line.length === 0 && tempLine.length === 0) {
            console.log("Nice")
            break;
        }
        continue
    }
    
    // 두 쪽다 순번이 아닌데, 사람을 움직일 수도 없다면 sad
    if(line.length === 0) {
        console.log("Sad")
        break;
    }
    
    // 두 쪽에서 모두 못 가는 경우 원래 줄의 사람을 옆줄로 이동시킨다.
    tempLine.push(line[0])
    line.shift()
}

// 와 정말 오래 걸림..
// 어려운 문제는 아니었는데 혼자 말려서 오래 걸린 것 같다.

// 반복의 단위를 생각해보자.
// 우선 누군가 나갈 상황인지를 확인 후, 못 가면 자리를 옮겨주는걸 하나의 단위로 잡았음.
// 이전엔 자리를 옮기고 나갈 수 있는지 확인을 했는데..
// 후자는 바로 내보낼 수 있는걸 굳이 옆으로 옮기고 그 후에 두 쪽을 확인해서
// 불필요한 실행이 좀 있던 것 같고, 이 과정에서 예외 사항이 터져나왔을 수도 있겠다.

