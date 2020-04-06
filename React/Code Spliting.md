# :bookmark_tabs: Code Spliting​

### 코드 스플리팅이란?

지금 당장 필요한 코드가 아니라면 따로 분리시켜서 나중에 **필요할 때만** 불러와서 사용할 수 있게 만드는것.

### 코드 스플리팅을 하는 이유

React App에서는, WebPack같은 번들러를 이용해 *여러 파일을 하나로*  병합해서 *번들 된* 파일을 로드하게 된다.

만약 앱이 커진다면, 번들도 커질 것 이고, 번들이 커지면 로딩 속도가 늦어질 수 있기 때문이다.

이를 방지하기 위해 **번들 나누기** 를 해서 런타임에서 여러 번들을 동적으로 나누고  불러온다. 또한 **앱 지연로딩(lazy loading)** 을 사용합니다.

이들을 통해 필요 없는 코드는 필요할때만 불러오고, 초기화 로딩의 비용을 줄여준다.



### import() 문법 사용

webpack이 이 구문을 만나면 앱의 코드를 분할한다.

```jsx
import (경로).then(실행할 함수 등...)
```

`dynamic import`라는 문법이다 이렇게 함수로 사용하면` Promise`를 반환한다.



### react.lazy

컴포넌트가 처음 랜더링될 때, 불러올 컴포넌트를 포함한 번들 자동으로 분리한다.

동적 import를 이용해서 컴포넌트 렌더링이 가능하다.

```jsx
const '불러올 컴포넌트' = React.lazy(()=> import(경로));

const component()=>{...}
```

`suspense 컴포넌트` 하위에서 렌더링 되어야한다.

```jsx
function Component () {
    return(
        <div>
            <suspense fallback={<div>로딩중...</div>}
                < lazyloading할  컴포넌트 />
             </suspense>
        </div>
	)
}
```

하나의 `suspense 컴포넌트로 `여러 `lazy 컴포넌트`를 감쌀 수 있다.

**fallback** props에는 컴포넌트가 로드될때까지 기다리는동안 랜더링 할 `React Element` 받아들인다. 

#### suspense 컴포넌트란?

`React 16.6` 기다리는 동안 컴포넌트가 렌더링하기 전에 '대기' 할 수 있도록 함 



### Error Boundary

다른 모듈 로드에 실패할 경우, `Error Boundary`를 이용해 처리할 수 있다.

`Error Boundary`를 만들어서 `lazy component`를 감싸면 네트워크 장애가 발생했을 때 에러 표시 가능하다



참고자료

[코드 스플리팅 - React](https://ko.reactjs.org/docs/code-splitting.html)

