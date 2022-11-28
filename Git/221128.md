## 좋은 커밋 메시지를 작성하는 팁

1. 제목과 본문을 한 줄 띄워 분리하기
2. 제목은 영문 기준 50자 이내로
3. 제목 첫 글자를 대문자로
4. 제목 끝에 . 금지
5. 제목은 명령조로
   - 부정문 Don't use (Not use가 아니라)
6. Github - 제목(이나 본문)에 이슈 번호 붙이
   - (#번호)
7. 본문은 영문 기준 72자마다 줄 바꾸기
8. 본문은 어떻게보다 무엇을, 왜에 맞춰 작성하기
9. 관사 사용 X
10. 동명사보다 명사를 사용

## 커밋 메시지 구조

```
type: Subject
body
footer
```

## TYPE

### Fix : 올바르지 않은 동작 수정

- Fix typo : 오타 수정
- Fix A in B : B의 A를 수정합니다
- Fix A which B, Fix A that B : B절인 A를 수정합니다
- Fix A to B, Fix A to be B : B를 위해 A를 수정합니다
- Fix A so that B : A를 수정해서 B가 되었습니다
- Fix A where B : B처럼 발생하는 A를 수정했습니다
- Fix A when B : B일 때 발생하는 A를 수정했습니다

### Add : 코드나 테스트, 예제, 문서 등의 추가가 있을 때

- Add A for B : B를 위해 A를 추가했습니다
- Add A to B : B에 A를 추가했습니다

### Remove : 파일을 삭제하는 작업만 수행한 경우

- Remove A from B : B에서 A를 삭제합니다

### Use : 특별히 무언가를 사용해 구현하는 경우

- Use A for B : B에 A를 사용합니다
- Use A for B : B에 A를 사용합니다
- Use A to B : B가 되도록 A를 사용합니다
- Use A in B : B에서 A를 사용합니다
- Use A instead of B :B 대신 A를 사용합니다

### Refactor : 코드 리팩터링

### Simplify : 복잡한 코드를 단순화 할 때.

Refactor의 성격이 강하나 이보다는 약한 수정의 경우

### Update : 개정이나 버전 업데이트가 있을 때

> 못된 것을 바로잡는 것이 아니라는 점에 주의.  
> 원래도 정상적으로 동작하고 있었지만, 수정, 추가, 보완을 한다는 개념.  
> 코드보다는 주로 **문서나 리소스, 라이브러리** 등에 사용.

- Update A to B

  - A를 B로 업데이트 합니다.

  ```
  Update acorn to 6.1.0
  ```

  - A를 B하기 위해 업데이트 합니다

  ```
  Update repo docs to use HTTPS
  Update app icons to match recent Android releases
  ```

### improve : 향상이 있을 때.

호환성, 테스트 커버리지, 성능, 검증 기능, 접근성 등 다양한 것들.

```
Improve compatibility with http/1
Improve Unicode handling
Improve test coverage in perf_hooks
Improve validation of report output
Improve performance of test-crypto-timing-safe-equal-benchmarks
Improve color detection
Improve Android Network Security config
Improve Accessibility
Improve iOS's accessibilityLabel performance by up to 20%
```

### make : 주로 기존 동작의 변경

새롭게 뭔가를 만들었을 때는 Make 대신, Add를 사용할 것.

- Make A B : A를 B하게 만듭니다
  - ex.
    - config object를 read-only로 만듭니다.
    - floating patch 메시지에 더 많은 정보가 담기도록 만듭니다.
    - ViewPropTypes의 값들을 옵셔널하게 만듭니다.
    - read()를 유저가 원한다면 무기한으로 호출되도록 만듭니다.
    - IsolateData가 ArrayBuffer를 저장하도록 만듭니다.

```
Make config object read-only
make 'floating patch' message informational
Make values optional in ViewPropTypes
make read() be called indefinitely if the user wants so
make IsolateData store ArrayBufferAllocator
```

### Implement : 코드가 추가된 정도보다 더 주목할 만한 구현체를 완성시켰을 때

> ‘Add’에 비해 더 큰 단위의 코드 추가에 사용  
> 특히 **모듈이나 클래스** 등의 단위에 사용되기 때문에 특별히 목적을 부여 해주지 않아도 되는 경우가 많다.  
> 따라서 ‘Add’에 비해 to나 for가 함께 사용되는 경우가 적다.

- Implement A to B : B를 위해 A를 구현합니다

### Revise : Update와 비슷하나 문서의 개정이 있을 때

```
Revise deprecation semverness info in Collaborator Guide
```

### Correct : 문법의 오류나 타입의 변경, 이름 변경 등

```
Correct grammatical error in BUILDING.md
Correct parameters, return types in crypto.md
Correct styling of _GitHub_ in onboarding doc
Correct buffer changelog ordering
Correct async_hooks resource names
```

### Ensure : 무엇이 확실하게 보장받는다는 것을 명시.

if 구문처럼 조건을 확실하게 주었을 때에도 사용 될 수 있다.  
‘Make sure’도 같은 용도로 사용될 수 있다.

```
Ensure quiet always takes precedence
Ensure cookies with illegal characters are not sent to okhttp
Ensure require.main for CJS top-level loads
Ensure Stream.pipeline re-throws errors without callback
Ensure options.flag defaults to 'r' in readFile
```

### Prevent : 특정한 처리를 못하게 막는다

- Prevent A from B : A를 B하지 못하게 막습니다

```
Prevent event handlers from receiving extra argument in development.
```

### Avoid : 회피, 특정한 동작 제외

‘Prevent’는 못하게 막지만, ‘Avoid’는 회피합니다. if 구문으로 특정한 동작을 제외시키는 경우에도 사용 할 수 있습니다.

```
Avoid flusing uninitialized traces
Avoid overrun on UCS-2 string write
Avoid race condition in OnHeaderCallback
Avoid memory leak on gc observer
Avoid materializing ArrayBuffer for creation
```

- Avoid A if B, Avoid A when B : B인 상황에서 A를 회피합니다.

```
Avoid importing entire crypto dependency tree if not in Node.js.
Avoid "Member not found" exception in IE10 when calling preventDefault() in Synthetic Events.
Avoid input validation warning from browsers when changing type.
Avoid double reload event when reloading JS
```

### Move : 코드의 이동이 있을 때

- Move A to B, Move A into B : A를 B로 옮깁니다

```
Move test-process-uptime to parallel
Move function from header to source file
Move async hooks trace events setup to pre_execution.js
move initialization of node-report into pre_execution.js
```

### rename : 파일 혹은 폴더명을 수정하거나 옮기는 작업만인 경우

- Rename A to B : A를 B로 이름 변경합니다

```
Rename node-report to report
Rename location to trigger
Rename node-report suite to report
```

### Allow : 허용

Make와 비슷하지만, 허용을 표현할 때 사용합니다.

- Allow A to B : A가 B를 할 수 있도록 허용합니다

```
Allow the output filename to be a {Function}
Allow Node.js-like runtimes to identify as Node.js as well.
Allow passing parseOptions to ApolloServerBase constructor.
Allow an optional function to resolve the rootValue, passing the DocumentNode AST to determine the value.
```

### Verify : 검증 코드를 넣을 때 주로 사용

```
Verify heap buffer allocations occur
```

### Set : 변수 값을 변경하는 등의 작은 수정

- Set A to B : A를 B로 설정합니다

```
set tls.DEFAULT_ECDH_CURVE to 'auto'
```

### Pass : 파라메터를 넘기는 처리에 주로 사용합니다.

- Pass A to B : A를 B로 넘깁니다

```
Pass the response toolkit to the context function.
```

### feat : 새로운 기능 추가

### docs : 문서 수정

### style : 코드 formatting, 세미콜론`;` 누락, 코드 변경이 없는 경우

### test : 테스트 코드, 리팩터링 테스트 코드 추가(프로덕션 코드 변경 X)

### chore : 빌드 업무 수정, 패키지 매니저 수정(프로덕션 코드 변경 X)

### design : CSS 등 사용자 UI 디자인 변경

### comment : 필요한 주석 추가 및 변경

### !BREAKING CHANGE : 커다란 API 변경의 경우

### !HOTFIX : 급하게 치명적인 버그를 고쳐야 하는 경우

## REF

- [좋은 commit 메시지를 위한 영어사전](https://blog.ull.im/engineering/2019/03/10/logs-on-git.html)
- [좋은 커밋 메시지 작성법](https://cocoon1787.tistory.com/708)
