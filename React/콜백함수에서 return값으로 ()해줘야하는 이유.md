## 1. map함수나 다른 콜백함수에서 화살표 함수를 사용할 때, return값으로 ()를 해주어야하는가?

    (param) => {<Component />}
    //에러 뜬다

    (param)=>(<Component />)
    //이러면 된다 !!

### 결론:

화살표 함수에서 객체 리터럴을 반한하기 위해서는 함수 body를 **괄호**에 넣어야함(필수임)

    ex) (param) => ({a:1, b:2})

JSX 설명에서

> JSX는 컴파일이 끝나면 < ... /> 이 표현식이 "객체"로 인식됩니다

라고 한다. **barbel** 에서 컴파일될때, <Component />가 <div classname="hello"> hello! </div> 라면,

     {
    	type: 'div',
    	props: {className: 'hello',
    		children: 'hello!'}
    }

라는 객체를 생성한다.

따라서, 객체 리터럴을 표현하기 위해서는 body를 괄호에 넣ㅇ야 하기 때문에

    (param)=>(<Component />)

라고 사용하여야 한다.

-
