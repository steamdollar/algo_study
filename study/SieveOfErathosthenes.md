# 에라토스테네스의 체
주어진 범위에서 (1~n까지) 소수를 찾는 가장 간단하고 빠른 알고리즘.

1~ i (i <= n**1/2) 까지의 배수를 하나씩 지워나가면 된다.

1 지우고, 2를 제외한 2의 배수를 다 지우고, 3을 제외한...

이 과정에서 합성수는 쭉 지워지고 소수만 남아서

자연스럽게 소수들의 배수만 지워나가게 된다.

그러다 i가 루트n보다 커지면 종료.

왜 루트n까지만 나누냐?

n보다 작은 수 m 이 m = a *b로 표현된다면

a, b 둘 중하나는 루트n이하이다.

따라서 n 미만의 합성수 m은 루트n까지만 걸러도 전부 사라짐.

//

이거랑 어떤 수가 소수인지를 묻는 소수판정과는 완전히 별개의 문제다.

소수판정은 더 좋은 방법이 많이 있음.

이걸 이용해 1929번을 풀어보자.
