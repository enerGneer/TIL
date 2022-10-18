# Next.js에 대해 알아보기

## Next.js

React로 만드는 서버사이드 렌더링 프레임워크

- 클라이언트 사이드 렌더링의 문제점
    1. 대기시간이 길다
        - 모든 js파일 로드 후 → 사용자가 웹을 보게 되는 구조
    2. SEO 문제가 있다 (검색에 아무 페이지도 걸리지 않는다)
        - js가 로드되지 않은 경우 아무 정보가 보이지 않는다
- 서버 사이드 렌더링은 위 두가지 문제를 해결한 것
    1. 서버에서 js를 로딩 → 클라이언트 측의 js 로딩시간 단축
    2. SEO 최적화
        - 서버 측에서 js, html, css를 만들어 컨텐츠를 직접 업로드
        - meta 태그 자유롭게 추가 가능

---

## Next.js가 제공하는 주요 기능

### hot reloading

- 개발 중 저장되는 코드 자동 새로고침

### automatic routing

- pages 폴더에 있는 파일은 해당 파일 이름으로 라우팅
    - (pages/page1.tsx -> localhost:3000/page1)
- public 폴더도 위와 동일하게 라우팅 가능
    - 모든 사람이 페이지 접근 가능하므로 지양하자

### single file components

- style jax 사용으로 컴포넌트 내부에 해당 컴포넌트만 스코프를 가지는 css를 만들 수 있다.
- `style jsx global`을 사용하면 글로벌로 스타일 정의 가능
- `_app.tsx`에만 글로벌 스타일 정의 가능
    - 다른 컴포넌트에 정의한 경우 다른 클래스와 겹쳐 오류를 발생시킬 수 있기에

### server landing

- 클라이언트 렌더링과의 차이점
    - 서버렌더링 페이지의 소스보기를 하면 내부에 소스가 있다

### code splitting

- dynamic import를 이용하면 손쉽게 가능
- 내가 원하는 페이지에서 원하는 자바스크립트와 라이브러리를 렌더링 하는 것
- 모든 번들(chunk.js)이 하나로 묶이지 않고, 각각 나뉘어 좀 더 효율적으로 자바스크립트 로딩 시간을 개선 가능

### typescript

- 타입스크립트 활용을 위해 웹팩이나 바벨을 건드릴 필요가 없다
    - 타입스크립트를 설치하고 (`yarn add typescript @types/node @types/react`
    ) 명령어 (`yarn run dev`
    )만 하면 자동으로 tsconfig, next-end.d.ts가 생성되어 타입스크립트로 코딩이 가능

## _document.tsx

- meta태그 정의하거나, 전체 페이지에 관여하는 컴포넌트

```jsx
// pages/_document.tsx
import Document, { Html, Head, Main, NextScript } from "next/document";
export default class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          // 모든페이지에 아래 메타테크가 head에 들어감 // 루트파일이기에 가능한
          적은 코드만 넣어야함 전역 파일을 엉망으로 만들면 안된다 // 웹 타이틀,
          ga 같은것 넣음
          <meta property="custom" content="123123" />
        </Head>
        <body>
          <Main />
        </body>
        <NextScript />
      </Html>
    );
  }
}
```

## _app.tsx

- 최초로 실행되는 것
    - 클라이언트에서 띄우길 바라는 전체 컴포넌트 → 공통 레이아웃
- 이곳에서 렌더링 하는 값은 모든 페이지에 영향 미침

### import style component

- 

## sass 사용하기

1. 따로 config 파일 정의X
2. css 파일을 scss로 바꾸고 `yarn add sass --dev`
3. next에서 알아서 설정

## Link 사용하기

- next에선 a태그 사용 X
    - a태그의 동작구조 때문
        - 따라서 전혀 다른 사이트로 페이지 이동시켜 다시 돌아오지 않는 경우에만 사용
- 그 외에는 모두 `Link` 태그 사용

```jsx
import Link from "next/link";

const Index = () => (
  <div>
    <Link href="/blog">
      <a>Blog</a>
    </Link>
    // 동적 link시 [] 사용
    <Link href="/blog/[address]">
      <a>Blog</a>
    </Link>
  </div>
);
```

## 동적 url 지원

- [ ] 문법으로 동적 페이지 생성하는 동적 url 만들 수 있다

## prefetching

- 백그라운드에서 페이지를 미리 가져온다. 기본값 true
- Link 컴포넌트를 사용해서 이뤄진다

## next/router 사용법

- `react`의 `react-router-dom`과 사용 방법 유사
- link에 있는 preferch 기능도 사용 가

## custom 태그로 head 태그 옮기기

- `next/head`로 부터 Head 컴포넌트를 받아 모든 컴포넌트에서 사용가능

```jsx
import Head from "next/head";

export default () => (
  <div>
    <Head>
      <title>새로 만들어진 타이틀 입니다</title>
    </Head>
    <div>...</div>
  </div>
);
```

---

## 🔗 REF

- [https://kyounghwan01.github.io/blog/React/next/basic/#next-js가-제공하는-주요-기능](https://kyounghwan01.github.io/blog/React/next/basic/#next-js%E1%84%80%E1%85%A1-%E1%84%8C%E1%85%A6%E1%84%80%E1%85%A9%E1%86%BC%E1%84%92%E1%85%A1%E1%84%82%E1%85%B3%E1%86%AB-%E1%84%8C%E1%85%AE%E1%84%8B%E1%85%AD-%E1%84%80%E1%85%B5%E1%84%82%E1%85%B3%E1%86%BC)
