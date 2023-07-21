let n = Number(require("fs").readFileSync("/dev/stdin").toString().trim())

console.log(n*(n-1)/2)
console.log(2)

// 1~6, (n-3), (n-2), ... 1 