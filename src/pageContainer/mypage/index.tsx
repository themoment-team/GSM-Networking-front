'use client';

import * as S from './style';

import { Profile, CareerCard } from '@/components';
import type { CareerType } from '@/types';

interface MentorInfoType {
  id: number;
  name: string;
  email: string;
  generation: number;
  SNS?: string;
  profileUrl?: string;
  registerd: boolean;
  career: CareerType[];
}

interface Props {
  myInfo: MentorInfoType;
}

const MyPage: React.FC<Props> = ({
  myInfo: { name, generation, career: careerList },
}) => {
  const a = 0;

  return (
    <div>
      <S.ProfileContainer>
        <Profile name={name} generation={generation} />
      </S.ProfileContainer>
      <S.Line />
      <S.CareerContainer>
        <S.CareerInfoText>재직 정보</S.CareerInfoText>
        <S.CareerBox>
          {careerList.map((career, i) => (
            <CareerCard career={career} key={i /*career.id 수정 */} />
          ))}
        </S.CareerBox>
      </S.CareerContainer>
    </div>
  );
};

export default MyPage;
