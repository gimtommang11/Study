# Web Socket

## 웹 소켓이란?

웹 소켓은 클라이언트와 서버 사이에 상호 작용 가능한 통신 세션을 설정할 수 있게 할 수 있는 기술이다. 

따라서 개발자는 웹 소켓 API를 통해 서버로 메시지를 보내고 서버의 응답을 위해 서버를 폴링하지 않고도 이벤트 중심을 받을 수 있다.

폴링이란 일정 시간마다 클라이언트가 서버로 동기적 요청을 보내 사용 가능한 정보가 있는지 알아내는 것을 의미한다.  즉, 클라이언트에서 주기적 요청으로 서버로 보내서 정보를 받아온다.

웹 소켓은 서버에 메시지를 보내면 폴링을 하지 않아도 서버로부터 이벤트 중심의 응답을 받는것이 가능하다.

우리가 많이 들었던 SOCKET.IO는 이 웹소켓을 사용한 수많은 라이브러리 중 하나이다.(node.js를 사용한다고 한다.)



[MDN-Websocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API)

[socket.io_공식문서](https://socket.io/)

