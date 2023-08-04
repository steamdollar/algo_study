let input = require("fs").readFileSync("/dev/stdin").toString().trim()
.split("\n")

let att = new Set()

for(let i = 1; i < input.length; i++) {
    const [name, act] = input[i].split(" ")
    if (act == "enter") {
        att.add(name)
    } else if (act == "leave") {
        att.delete(name)
    }
}

let arr = Array.from(att)

arr.sort().reverse()

console.log(arr.join("\n"))