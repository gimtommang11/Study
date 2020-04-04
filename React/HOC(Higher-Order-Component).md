# :bookmark_tabs: HOC(Higher Order Component)

중복되는(반복되는) 코드를 없애기 위한 함수. 코드 스플리팅에도 도움이 된다.

LifeCylcle 메서드를 붙여주거나 reudx에서 특정 값을 받아서 주입해줄 수 있다

보통 `with`를 접두사로 넣어서 네이밍한다.

### HOC의 원리

1. 파라미터로 컴포넌트를 받아온다.

   ```jsx
   const HOC = (Component) =>{ ... }
   ```

   

2. 함수 안에서 새 컴포넌트를 만든다(리턴한다)

   ```jsx
   const HOC = (Component) =>(props)=>{
       ...
   }
   //-----
   function HOC(component){
       return function InnerComponent(props){
           ...
       }
   }
   ```

   

3. 해당 컴포넌트 안에서 파라미터로 받아온 컴포넌트를 랜더링한다.

   ```jsx
   const HOC = (Component) => (props)=>{
   	return <Component />
   }
   ```

 

#### HOC 사용법

```
export default HOC(Componet)
```



#### 랜더링 하기전에 전처리값이 필요하다면?

##### 컴포넌트 리턴 전에 함수를 리턴하고 컴포넌트를 리턴한다.

```jsx
const HOC = (options) => (Component) =>(props)=>{
    
}

//사용법
export const HOC(options)(component)
```



참고자료

[컴포넌트에 날개를 달아줘, 리액트 Higher-order Component (HoC) - 벨로퍼트](https://velopert.com/3537)

[리액트(React) 이해 4 - Higher Order Component(HOC)로 컴포넌트 재사용 하기](https://usecode.pw/react-%EC%9D%B4%ED%95%B4-4-higher-order-component/)

