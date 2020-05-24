# BEM 방법론

CSS 개발 방법론 중 하나. **Block Element Modifier**

요소에 대한 클래스의 이름을 짓는데 방법을 제시한다.

오직 클래스명에만 사용할 수 있다. 이는 BEM 방식 이름을 여러번 반복하여 재사용할 수 있도록 한다.

### Block(전체를 감싸는 블럭 요소)

![img](https://t1.daumcdn.net/cfile/tistory/235E3133568B047227)

블럭을 만들면 블럭에 속해있는 클래스명에는 이 블럭의 이름을 먼저 적고 클래스명을 짓는다



### Element

블럭이 포함하고 있는 한 조각

블럭이름 뒤에 두 개의 밑줄표시로 연결하여 작성한다.

```css
.block__element{property: value};

.header__logo{property: value};
```



### Modifier

블럭 혹은 엘리먼트의 속성이다.

블럭 혹은 엘리먼트의 외관이나 상태를 변화시킨다

엘리먼트 혹은 블럭 뒤에 두개개으 하이픈(`--`)으로 연결해 표기한다

```css
.block--modifier{};
.block__element--modifier
```



css name 중복을 방지하고 직관적이라는 장점이 있다.