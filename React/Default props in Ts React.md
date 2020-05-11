# Default props in Ts React

DefaultProps는 props가 전달이 안 되었을때 문제가 생가지 않도록 예비용으로 존재하는 값이다.



```tsx
import React from 'react';
import * as S from './style';

interface Props {
  isCancel?: boolean;
  buttonName: string;
}
const defaultProps: Props = {
  isCancel: false,
  buttonName: '버튼',
};
const ModalButton: React.FC<Props> = ({ isCancel, buttonName }) => {
  return <S.ModalButton isCancel={isCancel}>{buttonName}</S.ModalButton>;
};

ModalButton.defaultProps = defaultProps;

export default ModalButton;
```

이런식으로 defaultProps를 사용하면 isCancel이나 buttonName props가 전달이 되지 않아도 미리 정의해논 값이 들어간다