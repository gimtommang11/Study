# res.send와 res.json

express에서는  http 요청을 수신 할 때마다, 개발자에게 일반적으로 res라는 객체를 제공한다.

이 res 객체는 api 호출에 전송될 응답을 참조한다.

여기서 응답을 보낼 수 있는 함수가 있는데, res.send와 res.json이다.



### res.send

```js
res.send({message:success})
```

res.send는 콘탠츠 유형을 text/html 로 설정한다. 클라이언트는 이것을 text로 처리한다.

json 도 처리해주긴 하지만, json.send로 json 객체를 넣으면 res.json을 한번 호출 한 후, json.send를 호출해서 불필요한 호출이 한번 더 일어난다.



### res.json

```js
res.json(productList)
```

res.json은 콘탠츠 유형을 application/JSON 으로 설정하여 JSON 객체로 취급하도록 한다

이것을 사용하면 res.json()을 하고 res.send() 딱 두 개의 함수가 호출되기 때문에 json 객체를 줘야한다면, res.json 을 사용하는게 좋다