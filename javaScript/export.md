# export 

js를 사용한다면, 특히 react를 사용해서 개발을 해 보았다면 `import`와 `export`는 많이 보았을 것 이다. 

export구문이 단순히 내보낼 때 사용하는것이라고 생각했던 나는 `export default const`라고 써놓고 에러나는것을 보고 다시 공부해야겠다고 생각했다.



export 구문이란 , js 모듈에서 **함수**, **객체**, **원시 값**을 내보낼 때 사용한다.

이는 strict mode를 설정 안해도 strict mode로 동작한다.

#### strit mode?

엄격 모드는 기존 js에서 무시되던 에러를 내보내고, 엔진 최적화 작업을 어렵게 만드는 실수를 바로잡는 등 여러 일을 한다.



#### export

```js
export let nameN;
```

export에는 named export와 default export 가 있다.

#### named export

```js
export { func1, var1 };
export let foo1;
```

한번에 여러 값을 내보낼 때 유용합니다. 

#### default export

```js
export default func1;
```

default export는 한번에 한개씩의 값을 내보낼 수 있습니다.

원시 값은 exprot 할 수 없다

