'use client';

import * as S from './style';

import { TriangleIcon } from '@/assets';

interface ToolTipProps {
  textArr: string[];
}

const ToolTip: React.FC<ToolTipProps> = ({ textArr }) => (
  <S.ToolTipWrapper>
    <S.IconWrapper>
      <TriangleIcon />
    </S.IconWrapper>
    <S.ToolTipContent>
      {textArr.map((text, i) => (
        <S.ToolTipText key={text + i}>{text}</S.ToolTipText>
      ))}
    </S.ToolTipContent>
  </S.ToolTipWrapper>
);

export default ToolTip;
