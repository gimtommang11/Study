# type alias / interface

## Type alias (타입 별칭)

이미 존재하는 타입에 다른 이름을 붙여서 복잡한 타입을 간단하게 쓸 수 있게 하는것

```typescript
type myType = string
```

이 type엔 모든 타입이 올 수 있다.

type에 새로운 이름을 붙인 것 뿐이고 새로운 타입이 생성되는건 아니다.



## interface

값이 따라야 할 제약을 타입으로 표현.

값이 어떤 맴버를 가져야하고 그 타입은 어때야 하는지 서술한다

**새로운 타입이 생성**된다.

```typescript
interface myInterface {
	a: number;
	b: string;
}
```

함수 인터페이스로 함수 타입을 표현할 수 있다

```typescript
interface myFunction{
	(myParameter: number): number //함수 인터페이스
}
```

읽기 전용 속성(readonly), 선택속성(?) 정의 가능하다.

 ```typescript
interface myInterface {
	readonly a : number;
	b? : number
}
 ```

제네릭 인터페이스를 정의할 수 있다. 인터페이스 이름 뒤에 타입 변수 정의를 붙인다.

```typescript
interface MyInterface<Data>{
	data: Data;
	a: number;
	b: string
}
interface FunctionInterpace {
    <Data> (parameter: MyInterface<Data>):Data
}
```



## 인터페이스와 타입별칭 

 타입스크립트 공식 문서는 가능한 경우 항상 타입 별칭보다 인터페이스를 사용할 것을 권장한다. **기본적으로 인터페이스로 표현할 수 있는 모든 타입은 인터페이스로 표현하고, 기본 타입에 새로운 이름을 붙이고 싶거나 유니온 타입을 명명하고 싶은 경우 등 인터페이스의 능력 밖인 부분에서만 타입 별칭을 사용하자**.

