//let input = require("fs").readFileSync("/dev/stdin").toString().trim()
let input = `10
6 3 2 10 10 10 -10 -10 7 3
8
10 9 -5 2 3 4 5 -10 10`.split("\n")

let hand = input[1].split(" ")

let card = input[3].split(" ")

let map = new Map()

for (let i = 0; i < card.length; i++) {
    map.set(card[i], 0)
}


for(let i = 0; i < hand.length; i++) {
    if (map.has(hand[i])) {
        map.set(hand[i], map.get(hand[i]) + 1)    
    }
}

let ans = ""

// 이렇게하면 card에 중복되는 숫자가 있을 경우 중복이 제거되게 되서 틀림
// 이 때는 map으로 진행하면 안된다.
// map.forEach(v => {
//     ans += v + " "
// })

for(let i = 0; i < card.length; i++) {
    ans += map.get(card[i]) + " "
}


console.log(ans)

// 마찬가지로, arr을 통해 해온 것들을 set이나 map으로 해주면 된다.
// 어떻게 해야 시간복잡도의 차수를 낮출 수 있을지 잘 모르겠네..
// 방법은 생각이 나는데 확신이 없다고 해야하나..
// 일단 해보면서 알 수 밖에 없는건가..