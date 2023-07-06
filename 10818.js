let fs = require("fs")
let input = fs.readFileSync("/dev/stdin").toString().split("\n")

const [num, proto_arr] = input

let arr1 = proto_arr.split(" ")


let min, max

for(let i = 0; i < arr1.length; i++) {
    if(arr1[i] >= max || max == undefined) {
        max = Number(arr1[i])
    }
}

for(let i = 0; i < arr1.length; i++) {

    if (arr1[i] <= min || min == undefined) {
        min = Number(arr1[i])
    }
}

console.log(min, max)