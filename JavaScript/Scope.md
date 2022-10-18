# Scope

### 정의

- 변수에 접근할 수 있는 범위

### 타입

1. global 전역
    - 어느 곳에서든지 해당 변수에 접근 가능
2. local 지역
    - 해당 지역에서만 접근 가능
    1. ex. 함수 스코프
        - js에서 함수를 선언하면 함수를 선언할 때마다 새로운 스코프를 생성하게 된다.
        - 그러므로 함수 몸체에 선언한 변수는 해당 함수 몸체안에서만 접근 가능
        
        ```jsx
        var a = 1; // 전역 스코프
        function print() { // 지역(함수) 스코프
         var a = 111;
         console.log(a);
        }
        print(); // 111
        console.log(a); // 1
        ```
        
        - 위 예제의 print 함수에서 console.log(a);는 a를 출력하기 위해 자신의 함수 스코프 안에 변수 a가 있는지 찾아본다.
            - var a = 111; 을 찾아내면 111을 console에 출력하고 함수는 자신의 사명을 다하게 되는 것
        
        ```jsx
        var a = 1; // 전역 스코프
        function print() { // 함수 스코프
         console.log(a);
        }
        print(); // 1
        ```
        
        - Scope Chain
            - 현재 자신의 scope에서 사용하고자 하는 변수가 없다면 Scope Chain을 통해 해당 변수를 찾게 된다.
    2. ex. 블록 스코프
        - 블록 block : { } 로 둘러싸인 부분
        - 기존 var의 경우 함수 스코프를 가졌기 떄문에 함수 내에서만 지역변수가 유지되는 문제가 있었다.
            - ES2015(ES6)에서 let, const 키워드가 추가되어 함수가 아닌 일반 블록에서도 지역변수를 선언할 수 있게 되었다.
                - :idea: var, let const 에 대한 것 자세히 알아보기
---

## 🔗 REF

- [https://medium.com/@su_bak/javascript-스코프-scope-란-bc761cba1023](https://medium.com/@su_bak/javascript-%EC%8A%A4%EC%BD%94%ED%94%84-scope-%EB%9E%80-bc761cba1023)