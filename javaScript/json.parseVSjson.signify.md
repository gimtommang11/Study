## 2.Json.parse vs Json.stringify

### 2-1 JSON vs JS literal Object

우선 json과 js literal object의 차이를 알아야 한다.

js를 잘 모르는 사람들은 json형과 js literal obj가 같은것이라고 생각할지도 모른다. JSON을 풀이하면 **'JavaScript Object Notation'** 이기 때문이다.

> JSON은 속성-값 쌍 또는 "키-값 쌍"으로 이루어진 데이터 오브젝트를 전달하기 위해 인간이 읽을 수 있는 텍스트를 사용하는 개방형 표준 포맷이다.

위키백과에는 이렇게 설명하고 있다.

하지만 json과 js literal object에는 이러한 차이가 있다.

    //JSON
    {
    	"name":"Suha Lee",
    	"age" : "18"
    }

    //JavaScript
    {
    	name: "Suha Lee",
    	age : 18
    }

Json형식은 js object와 형식은 비슷하지만 모든 프로퍼티에 큰따옴표가 붙여져 있는 모습을 하고있다. 이제 json.parse와 json.stringify의 차이를 알아보자

둘의 차이는 간단하다

**JSON.parse는 *JSON*을 *JS object*형식을 바꿔준다.**

**JSON.stringnify는 *JS object*를 *JSON*형식으로 바꿔준다**
