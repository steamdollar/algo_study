arr와 Map/Set의 method들의 시간 복잡도 비교

## array
- index로 접근 : O(1)

- 끝에서부터 삽입, 제거 : O(1)

- 시작에서부터 삽입, 제거 : O(n) 
: 다른 요소들이 전부 리인덱싱 되어야 하므로

- includes, find를 이용해 값 탐색 : O(n)

## Map / Set / Object (Dictionary)
- 추가, 접근, 제거 : O(1) 
해시를 사용하므로 이 점에서 arr보다 유리
다만, hash 충돌이 일어날 경우, 최악의 경우 O(n)까지 커질 수 있다.

- 값 탐색 : O(1) : 위와 동일한 이유
