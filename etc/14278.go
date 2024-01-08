/*
동적 프로그래밍, 재귀를 사용해야할 것 같음.
일단 작은 걸로 시작해, 큰걸 구하자.
변수는 base block의 width, 전체 블럭의 height.
여기서 width는 상수로 주어진다.
그래도 1에서 w까지 도달하는데 어차피 필요할 것 같음.
f(w,h) = f(?,?) + ... (1 <= w, h <= 10)
이런식으로 나올 것 같다.

플레 문제지만 어려운 cs 지식이 들어가는 것 같지 않고
점화식 들어가는 수학 문제에 가까운 것 같다.

각 base block의 넓이 = 1, 2... 의 경우를 메모이제이션해두면 연산도 많지 않게 될 것 같음.

결국 base = 1, 2, 3의 경우의 조합으로 환원될 것.

한 층만 쌓는 경우를 생각해보면
f(1, 1) = 2 [(0), (1)] // f(1, h) = h+1
f(2, 1) = 5 [ (2), (1,1), (1,0), (0,1), (0,0) ]
f(3, 1) = 13 [(3), (2, 1), (1, 2), (2, 0), (0, 2), (1, 0, 0), (0, 1, 0), (0, 0, 1), (1, 1, 0), (1, 0, 1), (0, 1, 1), (1, 1, 1), (0, 0, 0)]

w 넓이의 n번째 층을 쌓는 경우의 수를 g(w,n)이라고 하면 g(w,0) + g(w,1) + ... g(w,n) = f(w, n) (반드시 n층이어야 함)

g(w, 1) = f(w, 1)

f(1,h) = h + 1

//

g(2,2) = g(2,1) 에서 1층을 다 채운 경우 * g(2,1) + g(2,1)에서 1층중 1개만 채운 경우 * g(1,1) + g(2,1) 에서 하나도 안 채운 경우

	= 2 * 4 + 2

g(2,3) = g(2,2)에서 2층을 다 채운 경우 * g(2,1) + g(2,2에서 1층중 한개만 채운 경우 * g(1,1) + g(2,2)에서 하나도 안 채운 경우

	= g(2,1)에서 1층을 다 채운 경우 * g(2,2)에서 2층을 다 채운 경우 * g(2,1)
	  + (g(2,1)에서 1층을 다 채운 경우 * g(2,2)에서 하나만 채운 경우 + g(2,1)에서 하나만 채운 경우 * g(2,2)에서 그 위에 하나를 채운 경우 (maybe 1)) * g(1, 1)
	  + g(2,2)에서 하나도 안 채운 경우 ( = 1 )

...

	n층까지 다 채운 경우 > 2^n

g(2,n) = (n-1)층까지 모두 두 칸을 다 채운 경우 = 2^(n-1) * g(2,1) = 2^(n-1) * 4 = 2^(n+1)

	+= n-2층 까지 두 칸 채우고 n-1층부터 한 칸 채운 경우 = 2^(n-2) * 2 = 2^(n-1)

	+= n-3층까지 두 칸 채우고 n-2층부터 한칸 채운 경우 = 2^(n-3) * 2 = 2^(n-2)

	+= g(2, k)까지 두칸 채우고 g(2, k+1), ... g(2, n-1)까지 한 칸 채운 경우 = 2^k * 2
	  ...

	+= 첫 층부터 한 칸만 쭉 채운 경우 = 2^1

	  = 2(1+ ... + 2^(n-2)) + 2^(n+1) = 2 * (2^(n-1) -1 ) + 2^(n+1) = 2^(n+1) + 2^n - 2 = 3 * 2^ n - 2

f(2,n) = g(2,1) + g(2,2) + ... g(2, n)

	= -2n + 3 * (2^1 + ... 2^n)
	= -2n + 6(1 + ... 2^(n-1))
	= -2n + 6 * (2^n - 1)

//

w = 3 인 경우부터는 브릿지되는 경우가 있어서 더 복잡한데 아마 이 때부턴 일반화를 해야할 것 같다.

f(3,n) = g(3,1) + ... g(3, n)

g(3,1) = f(3,1) = 13

g(3,n) = (a) (n-1)층이 세 칸을 다 쓴 경우 = g(3, n-1)

	> w를 다 쓰는 경우 : a + 2b + 3c = w

	(b) 두 칸만 연속으로 쓴 경우 = b(3, n-1) * g(2, 1)
		b(3, k) = k-1 층에서 세칸 다 쓴 경우 * 그 중 연속 두 칸 사용한 경우 + k-1층에서 연속 두 칸을 썻고, 그 위에 얹는 경우
			= f


	(c) 두 칸을 한 칸 띄고 쓴 경우 = c(3, n-1) * 3
	(d) 한 칸만 쓴 경우 = d(3, n-1) * 1
*/
package main

import (
	"fmt"
	"math"
)

func solution(w,h int) int {
	
	if w == 1 {
		return h+1
	}
	
	if w == 2 {
		ans := 6 * int(math.Pow(2, float64(h))) - 2*h - 6
		return 1000000007 % ans
	}
	
	// solution(w,h) 값을 저장할 w * h 배열
	memo := make([][]int, w)
	
	for i := 0; i < w; i++ {
		memo[i] = make([]int, h)
	}
	
	// f(1,h) = h + 1
	for i := 0; i < h ; i++ {
		memo[0][i] = i+2 
 	}
	
	memo[1][0] = 5
	
	// f(3, 1) = 13
	memo[2][0] = 13
	
	for i := 0; i < h; i++ {
		memo[2][i] = 6 * int(math.Pow(2, float64(i))) - 2*i - 6
	}
	
	fmt.Println(memo)

	return 0
}

func main() {
        var w,h int
        fmt.Scanf("%d %d", &w, &h)
        
	ans := solution(w, h)
	
        fmt.Println(ans)
}