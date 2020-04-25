# Wrapper Object(래퍼 객체)

Js는 **원시타입** (string, number, boolean, null, undefind, symbol) 그리고 **참조타입** (object, array, function)이 존재한다

이때, 이런 코드를 사용하고 싶다고 하자

    console.log("apple".length);  //5

여기의 apple은 리터럴 문자열로 원시 타입이다. 하지만 .length 라는 프로퍼티를 사용할 수 있다. 마치 new 연산자를 사용해 객체를 만들어준 것처럼 말이다.

이때는 원시타입의 값에도 메서드를 사용하기 위해 **래퍼 객체** (String, Number,Boolean,Symbol)이 있다.

프로퍼티가 원시 자료형 값을 참조(사용?)하려고 할 때, '래퍼 객체'로 입시 변환한다. 래퍼 객체는 진짜 객체다.

프로퍼티의 참조가 끝나면 소멸한다.
