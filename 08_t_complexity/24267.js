let n = require("fs").readFileSync("/dev/stdin").toString().trim()

// i : 1,2 ,3, ... n-2 > n-2
// j : i+1, i+2, ... n - 1 
//  > n-1-i-1+1 = n - i - 1 
        // > n-2, n-3, ... 1


// k : j+1, j+2, ... n > n-j > n-i-1, n-i-2, ... 1 > n-2, n-3, ... 1