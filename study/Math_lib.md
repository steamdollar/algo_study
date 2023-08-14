# Math
이 class에 유용한 수학적 함수들이 많다.

거듭제곱이라던가, 소수 내림, 반올림, 절대값 등등..

자료 구조를 공부하기 전에 여기서 유용한 함수들을 몇 개 더

알아가면 좋을 것 같다.

//

1. .abs(x)
숫자의 절대값을 돌려준다.

``` js
    console.log(Math.abs(-5))
    // 5
```

2. .ceil(x)
x 이상의 최소 정수값을 반환
``` js
    console.log(Math.ceil(4.3)) // 5
```

3. .floor(x)
x 이하의 최대 정수값을 반환 ([x])
``` js
    console.log(Math.floor(4.7)) // 4
```

4. .round(x)
x를 반올림
``` js
    console.log(Math.round(4.5)) // 5
```

5. .pow(x, y)
x ** y
``` js
    console.log(Math.pow(2, 3)) // 8
```

6. .sqrt(x)
x의 제곱근
``` js
    console.log(Math.sqrt(16)) // 4
```

7. Math.random()
0~1 사이의 무작위 유사 난수 생성
``` js
    console.log(Math.random())
```

8. 삼각함수
``` js
    Math.sin(x)
    Math.cos(x)
    Math.tan(x)
```

9.  .max(...values), .min(...values)
이 함수들은 iterable을 인수로 받아 iterable의 최대, 최소값을 반환
``` js
    console.log(Math.max([1,2,3,4])) // 4
    console.log(Math.min([1,2,3,4])) // 1
```

그 밖의 로그나 지수함수 제 세곱근 등도 있는데

이 정도만 알면 될 듯.

써놓고 보니까 다 한 번씩은 본거네..