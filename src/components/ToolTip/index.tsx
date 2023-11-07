'use client';

import * as S from './style';

import { TriangleIcon } from '@/assets';

interface ToolTilProps {
  textArr: string[];
}

const ToolTip: React.FC<ToolTilProps> = ({ textArr }) => (
  <S.ToolTipWrapper>
    <S.IconWrapper>
      <TriangleIcon />
    </S.IconWrapper>
    <S.ToolTilpContent>
      {textArr.map((text, i) => (
        <S.ToolTipText key={text + i}>{text}</S.ToolTipText>
      ))}
    </S.ToolTilpContent>
  </S.ToolTipWrapper>
);

export default ToolTip;
