# start node.js / express

따라하며 배우는 노드 리액트 시리즈 기본 강의

#### 보일러플레이트

로그인, 회원가입같은 자주 쓰이는 기능을 재사용 할 수 있게 만들어서 재사용하는것

### 1. node.js , Express 다운로드

#### node.js

자바스크립트를 브라우저 상이 아니더라도 서버 사이드에서 사용될 수 있게끔 해준다.

공식홈페이지에서 다운 가능. npm도 다운받자

#### package.json 생성

```
npm init
```

통해서 생성

#### Express 다운로드

```
npm install express --save
```



### 2. 기본적인 앱 만들어보기

```js
//index.js
const express = require('express'); //익스프레스 모듈 가져옴
const app = express(); //함수를 이용해 새로운 익스프래스 앱 생성
const port = 5000;  //포트번호

//hello world 출력하게
app.get('/', (req,res)=>res.send('Hello World!!안녕'));

//5000번 포트에서 실행하도록, listen하면 exampel...이 출력됨
app.listen(port,() => console.log(`Example app listening on port ${port}`));
```

```
//package.json  
  "scripts": {
    "start": "node index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

터미널에 `npm run start`를 치고 설정한 포트에 접속하면 "hello world!! 안녕"이 출력된다.

- ##### app object가 가지고있는 메서드
  - http 리퀘스트 라우팅  ex)`app.METHOD`, `app.param`
  - 미들웨어 설정  `app.route`
  - html view 랜더링 `app.render`

- `app.get(path, callback[,callback...])`  : http get요청을 지정된 콜백 함수를 사용하여 지정된 라우터로 라우팅
- `app.listen([port[, host[, backlog]]][, callback]))` : 특정한 호스트나 포트에 연결을 바인드하고 listen함. http를 반환한다

- `res.send` : HTTP 리스폰스 send한다.