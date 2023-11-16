import * as S from './style';

import { CannotFindIcon } from '@/assets';

interface Props {
  textArr: string[];
}

const CannotFound: React.FC<Props> = ({ textArr }) => (
  <S.CannotFindWrapper>
    <CannotFindIcon />
    <S.CannotFindText>
      {textArr.map((text, i) => (
        <S.CannotFindText key={text + i}>{text}</S.CannotFindText>
      ))}
    </S.CannotFindText>
  </S.CannotFindWrapper>
);

export default CannotFound;
