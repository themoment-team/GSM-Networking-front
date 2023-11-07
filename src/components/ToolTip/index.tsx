import * as S from './style';

interface ToolTilProps {
  textArr: string[];
}

const ToolTip: React.FC<ToolTilProps> = ({ textArr }) => (
  <S.ToolTilWrapper>
    {textArr.map((text, i) => (
      <S.ToolTipText key={text + i}>{text}</S.ToolTipText>
    ))}
  </S.ToolTilWrapper>
);

export default ToolTip;
