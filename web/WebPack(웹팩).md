# WebPack(웹팩) 

웹팩은 **모듈 번들러**입니다.

### 웹팩을 사용하는 이유

- life(즉시 실행 함수) 만들어준다
  - 파일을 합칠때(번들링) 스코프를 신경쓰지 않고 개발할 수 있게 해준다.
- js뿐만아니라 css같은 파일도 의존성 그래프로 묶어서 불러올 수 있게 해준다
- 이렇게 묶은 코드를 압축, 최적화 해준다
- Dynamic Loading, Lazy loading을 지원해준다.(웹팩 코드 스플리팅 기능 이용)



## 주요 개념

### 엔트리(Entry)

의존성 그래프의 시작점, 최초 진입점인 자바스크립트 파일 경로이다.

```js
module.exports = {
  entry: `${__dirname}/src/index.tsx`,
}
```

위위 코드는 `현재 디랙토리이름/src/index.tsx`로  src디랙토리 안의 index.tsx를 진입점으로 삼아서  빌드한다.

나의 index.tsx코드는 이러하다

```tsx
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));

```

react, reactDom, App.js를 import하고 `ReactDOM.render`을 통해 root id로(이는 `index.html`에 존재한다) `App.tsx`컴포넌트를 랜더링해준다. 

이렇게 보면 `index.tsx`부터 시작해서 `App.tsx`를 불러오고 `App.tsx`에서 여러 컴포넌트를 불러오는것으로 볼 수 있다!

즉, entry에 들어가야 하는 js파일의 내용은 웹 어플리케이션의 전반적인 구조와 내용, `App`을 동장시킬 수 있는 내용이 들어가야 한다

### Output

웹팩을 돌리고 난 결과물의 파일 경로

```js
module.export= {
  output: {
    path: `${__dirname}/dist`,
      filename: "bundle.js",
  },
}
```

객체 형태로 옵션을 추가 해 주어야 한다.

위 코드에 사용한 속성 옵션은 `filename`과 `path`이다.

- `filename` : 최소한 지정해줘야 하는 옵션, 웹팩으로 빌드한 파일이 가질 파일이름이다. 보통 `path`와 함께 쓰인다.
- `path` : 빌드된 파일이 들어갈 경로이다.

### 로더(loder)

웹팩이 js경로 뿐만아니라 html,css,images, 폰트와 같은 자원들도 변환 할 수 있도록 해준다.

```js
module.exports = {
  module: {	//module이라는 이름을 사용한다
    rules: [] //이 안에 객체형태로 로더를 넣어주면 된다
  }
}
```

적용할 수 있는 다양한 로더들을 [이곳](https://webpack.js.org/loaders/)에서 볼 수 있다.

#### ts 로더 추가하기

예시로 ts로더를 추가해보자. 이 로더를 적용하지 않고 ts를 사용하면 오류가 난다

![1588347862658](C:\Users\user\AppData\Roaming\Typora\typora-user-images\1588347862658.png)

```
npm install --save-dev ts-loader
```

먼저 `ts-loader`를 설치해주었다.

```js
 module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: ["ts-loader"],
      },
  },
```

다음으로 이렇게 정의해준다.

`test`:로더를 적용할 파일 유형으로 일반적으로 정규 표현식을 사용한다. 나는 ts,tsx 확장자 파일에 적용해준다고 했다.

`use` : 해당 파일에 적용한 로더 이름이다. `ts-loader`를 사용해준다고 했다.

로더는 여러 개 사용할 수도 있다.

```js
module:{
  rules:[
    {test:  /\.(ts|tsx)$/, use: ["ts-loader"]},
    {
      test: /\.css$/,
      use: ['css-loader', 'sass-loader'],
    },
  ]
}
```

특정 파일에 로더를 여러 개 사용하는 경우에는 오른쪽에서 왼쪽 순으로 적용된다.

### 플러그인

웹팩 기본적인 동작에 추가적 기능을 제공하는 속성

```js
module.export ={
    plugins: [],
} 
```

예시로 `html-webpack-plugin`을 적용시켜보겠다.

\* `html-webpack-plugin` : 

```js
const HtmlWebpackPlugin = require("html-webpack-plugin");
```

플러그인을 인스톨 한 후에 `webpack.config.js`파일 상단에  `require`을 통해 불러온다.

```js
 plugins: [
    new HtmlWebpackPlugin(),
  ],
```

 이런 식으로 적용해주면 된다. 이때, 주의할점은 **생성자 함수로 생성한 객체 인스턴스만 추가 될 수 있다**는 것 이다.

#### loader vs plugin

로더는 파일해석/ 변환과정에 관여하고

플러그인은 결과물의 결과 형태를 바꾼다.

