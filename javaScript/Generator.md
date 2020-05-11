# Generator

ES6에 추가된 함수. 이터러블을 생성하는 함수입니다.

*이터러블 : 이터러블 프로토콜을 준수한 객체, 간단히 말하면 순회 가능한 객체(배열 등)입니다.

함수를 작성할 때 함수를 **특정 구간에 멈춰**놓을 수도 있고, 원할 때 **다시 돌아가게** 할 수도 있습니다

```js
function count() {
return 1;
return 2;
return 3;
}
```

이런 함수가 있다. 이 함수를 실행시키면 맨 위의 값인 1만  반환됩니다

하지만 제너레이터 함수를 사용하면 순차적으로 값이 반환되도록 할 수 있습니다

### 선언 방법

`function*` 키워드로 생성하며 꼭 하나 이상의 `yield`가 존재해야 합니다

```js
function* generatorFunc(){
	yield 1;
}

let generatorObj = generatorFunc();

//함수 표현식
const generatorFunc = function* (){
    yeied 1;
}

//제너레이터 메소드
const obj = {
    * generatorObjMethod();
    yield 1;
}
```

### yield 와 Next

**yield**는 제너레이터 함수의 실행을 멈춘다. `return`과 비슷하지만, 값을 반환하고 함수가 사라져버리는 return 과 다르게 yield는 **여러 번 실행** 될 수 있습니다.

**next**는 제너레이터 yield를 실행시킵니다. 제너레이터 함수에는 `next()`메서드가 내장되어 있습니다.

### 동작 과정

가장 처음 예시로 들었던 `count()`을 제너레이터 함수로 바꾸어 봅시다

```js
function* count(){
	yield 1;
	yield 2;
	yield 3;
    return;
}

let generator = count();

generator.next();
generator.next();
generator.next();
generator.next();	
```

짜잔, 이런 코드가 되었습니다. 이제 하나씩 과정을 살펴봅시다.

​	![#1](..\..\TIL\images\Generator\Generator_Process\1.png)	

우선, `const generator = count();`로 함수를 호출해줍니다. 여기서 특이점은, 다른 함수들과 다르게 제너레이트 함수는 호출 시 **바로 실행되지 않는다**는 것 입니다.  대신 제너레이터 객체(generator object, `Generator{}`)를 반환합니다!

:tipping_hand_woman:  제너레이터 객체는 이럴 때 사용됩니다 !

제너레이터의 yield 구문이 사용될 때, 제너레이터의 스택 프레임은 스택에서 제외됩니다. 

하지만 제너레이터 객체가 스택 프레임에 대해 참조를 유지하고 있다가 다음 `next`때 활성화시켜서 실행을 계속하는것이지요

![#2](..\..\TIL\images\Generator\Generator_Process\2.png)

다음으로 `next`메서드를 만나 첫 번째 `yield`가 실행됩니다! :happy:

`{value:1, done: false}`라는 객체가 생성되는데요, `value`의 값은 yield 뒤의 표현식이 들어가며 return되는 값이라고 볼 수 있습니다. 

`done`이라는것도 보이는데, 이건 제너레이터 함수가 끝났는지 아닌지 boolean값으로 표현됩니다

![#3](..\..\TIL\images\Generator\Generator_Process\3.png)

다음 next를 통해 똑같이 실행되고..

![#4](..\..\TIL\images\Generator\Generator_Process\4.png)

또 다음 next에서 실행됩니다

![#5](..\..\TIL\images\Generator\Generator_Process\5.png)

마지막! `return`을 만나서 done이 true가 되었습니다.



이런식으로 제너레이터는 동작한다고 볼 수 있습니다. 



참고자료

[ES6 In Depth: 제너레이터(Generator) -  ingeeKim](http://hacks.mozilla.or.kr/2015/08/es6-in-depth-generators/)

[JavaScript Generator 이해하기-WONISM)](https://wonism.github.io/javascript-generator/)

[What Tamagotchis can teach you about generators | Jenn Creighton | JSConf Korea 2019](https://www.youtube.com/watch?v=bfCSfEZefeE)

