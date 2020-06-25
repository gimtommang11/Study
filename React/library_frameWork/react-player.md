# react-player



### usage

```
npm install react-player
```

```react
import React from 'react'
import ReactPlayer from 'react-player'
 
// Render a YouTube video player
<ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
```

리엑트 플레이어는 다양한 타입의 url을 지원하지만 , 만약 한 타입(유투브, 사운드클라우드 등)만 사용한다면, `react-player/youtube`처럼 import 해서 번들의 크기를 줄이자

```react
import React from 'react'
import ReactPlayer from 'react-player/youtube'
 
// Only loads the YouTube player
<ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
```

빌드 시스템이 import() 같은 기능을 지원할경우 `react-player/lazy`를 통해 통과한 url에 적합한 플레이어를 레이지 로딩을 하세요. 그러면아웃풋에 reactPlayer chunk는 추가되지만 메인 번들 사이즈는 감소합니다.



### props

- url - 재생할 비디오의 url을 넣는다. 배열이나 `MediaStream` 객체도 가능하다
- playng : `true / false`를 통해 미디어를 재생할지 말지 정한다
- loop : `true/false`를 통해 미디어를 반복시킬지 정한다
- controls: `true/false`를 통해  미디어에 원래 존재했던 컨트롤러를 보여줄지 아닐지 정한다.
- light : `true `를 설정하면 클릭 시 전체 플레이어를 로드하는 비디오 미리 보기만 표시한다.
  - 이미지 url로 미리보기 이미지를 재정의 할 수 있다.
- volume: 0과 1 사이의 플레이어 볼륨을 세팅한다 디폴트는 null
- muted: 플레이어를 뮤트한다. volume 이 있어야 세팅할 수 있다.
- playbackRate : 재생 속도를 조절한다. 디폴트는 1
  - 유트브, wistia, file path만 지원한다
- width/ height/ style
- progressInterval : onProgress 콜백의 시간, 밀리초다 디폴트는 1000
- playsinline: 지원되는 경우 재생라인 속성을 적용한다. 디폴트는 false
- pip: `true/false`를 세팅해서 pip모드를 활성화 할 수 있다.

- wrapper : 컨테이너 요소로 사용할 요소
- playIcon : 라이트 모드에서 재생 아이콘으로 설정할 요소
- config:  다양한 플레이어에 대한 옵션 재정의



### callback props

콜백 소품들은 다양한 선수 이벤트에서 실행(fired인데 뭔지 모르겠음)되는 기능을 취한다.(????)

(props로 함수를 전달할 수 있게 한다는듯.)

- onReady :미디어가 로드되어 재생할 준비가 되면 호출된다. 재생이 true로 설정된 경우 미디어가 즉시 재생됨
- onStart : 미디어가 재생되기 시작하면 호출된다.
- onPlay: 미디어가 버퍼링이나 멈춘 다음 시작되거나 재생될 때 실행된다
- onProgress : 재생 및 로드된 진행률을 분수로 포함하고 재생초 및 로드초(초)를 포함하는 콜백
  - eg `{ played: 0.12, playedSeconds: 11.3, loaded: 0.34, loadedSeconds: 16.7 }`
  - playedSeconds : 진행된 영상의 초
  - played : 
  - LoadedSeconds : 로딩이 진행된 초
  - Loaded : 

- onDuration: 미디어의 지속시간을 초로 포함하는 콜백

- onPause: 미디어가 중지될 때 호출된다
- onBuffer: 미디어가 버퍼링되기 시작될때 호출
- onBufferEnd: 버퍼링이 끝날 때 호출
- onSeek : 미디어가(second 파라미터와) 보일때 호출된다.
- onEnded: 미디어가 재생을 끝낼 때 호출한다
- onError: 미디어가 에러와 함께 종료되면 실행한다.
- onEnablePIP: pip모드가 실행될때 실행한다
- onDisablePIP: pip모드가 중지되면 실행한다



### Methods

#### static methods

- ReactPlayer.canplay(url) : URL을 재생할 수 있는지 확인하십시오. 개인 정보 설정, 스트리밍 권한 등으로 인해 재생할 수 없는 미디어는 감지되지 않는다. 이 경우, onError 프로펠러는 재생하기 위해 첨부한 후에 호출된다. 어떤 패턴과도 일치하지 않는 URL은 기본 HTML5 미디어 플레이어로 되돌아간다.

- ReactPlayer.canEnablePiP(url): url을 pip모드로 재생할 수 있는지 확인

- ReactPlayer.addCustomPlayer(CustomPlayer) : 사용자 지정 플레이어 추가: 사용자 지정 플레이어 추가를 참조하십시오

- ReactPlayer.removeCustomPlayers()



#### instance Methods

**ref**를 사용해서 instance method 를 플레이어에서 호출하세요.  

- seekTo(amount, type) : 지정된 시간이 0과 1 사이의 경우 분수를 구한다. 
  - `type`는 type 매개 변수를 사용하여 기본 동작을 재정의하기 위해 'properties' 또는 'properties'를 지정할 수 있음
- getCurrentTime(): 재생되고있는 초를 return한다.
  - 불가능할땐 `null`을 리턴한다
- getSecondsLoaded(): 로딩되고있었던 시간을 초로 리턴한다.
- getDuration(): 현재 재생중인 미디어의 기간을 초로 반환한다.
- getInternalPlayer(): 현재 재생 중인 플레이어의 내부 플레이어를 반환함

- showPreview() : 조명 모드를 사용할 경우 미리 보기 오버레이로 돌아가기





