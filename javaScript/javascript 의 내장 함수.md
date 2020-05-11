# javascript 의 내장 함수

웹앱개발을 위한 js기초 _ es5

### 내장함수

자바스크립트에서 제공하는 함수

## 대화 상자와 타이머 함수

### 대화 상자 함수

- alier() : 사용자에게 메시지 전달
- prompt() : 사용자에게 입력 받기 위함
- confirm() : 사용자 에게 확인 받기(예(true return)/아니오(false return))

### 타이머 함수

특정한 시간에 특정한 함수를 실행할 수 있게 하는 함수. 함수와 시간이 매개변수

- setTimeout(function,millisecond): 일정 시간이 지난 후 함수를 한 번 실행
- clearTimeout(id) : 일정 시간이 지난 후 함수를 한 번 실행하는것을 중지
- setInterval(function,millisecond) : 일정 시간 간격으로 함수를 반복해서 실행
- clearInterval(id) : 일정 시간 간격으로 함수를 반복해서 실행하는 것을 중지



## 인코딩, 디코딩 함수와 evel함수

### 인코딩

정보의 형태나 형식을 반환하려는 처리 방식

문자를 컴퓨터에 저장하거나 통신에 사용하기 위해 부호화하는 방법

웹 상에서 통신 시 한들 등의 유니코드 오작동 방지 위해 사용

- escape() : 영문 알파벳과 숫자, 일부 특수 문자를 제외하고 모두 인코딩
- encodeURI(): 파라미터 전달하는 인터넷 주소  전체 인코딩할때 사용. escape함수에서 사용되는 일부 문자 인코딩 안함
- encodeURIComponent(): 알파벳과 숫자를 제외한 모든 문자 인코딩

### 디코딩

인코딩 된 것을 닷니 원래의 문자나 정보로 되돌리는 것

- unescape() : escape()로 인코딩 된 정보 디코딩
- decodeURI() : encodeIIRI()로 인코딩 된 정보 디코딩
- decodeURICompoent() :encodeURIComponent()로 인코딩 된 정보 디코딩



### evel 함수

표현식을 코드로 실행할 수 있는 함수. 표현식, 변수 등을 코드로 변환하여 실행한다.



## 숫자 관련 함수

### 숫자 확인 함수

- isFinite() : 값의 유한성과 숫자 여부 판단하기 위한 함수. +무한대,-무한대, NaN의 경우 false나머지 true
- NaN : not a number의 약어. 자료형은 숫자지만 표현 불가능 시 입력되는 값
- isNaN() : 값이 NaN이면 ture, 아니면 false

### 숫자 변환 함수

- Number() : 다른 자료형 숫자로 변환할 때 사용
- parseFloat() : 문자열 부동 소수점 수로 변환할 때 사용
- parseInt() : 문자열 정수로 변환할 때 사용

 세 함수 모두 문자가 들어있으면 NaN 리턴

