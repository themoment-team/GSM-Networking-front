import { css } from '@emotion/react';

import * as S from './style';

import { ImageRegisterIcon } from '@/assets';
import { MyPageModalWrapper } from '@/components';

interface Props {
  closeModal: () => void;
}

const ProfileImgRegisterModal: React.FC<Props> = () => (
  <MyPageModalWrapper
    closeModal={() => {}}
    innerCss={css`
      border-radius: 1.25rem;
      padding: 1.5rem;
    `}
  >
    <S.Title>프로필 이미지 변경</S.Title>
    <S.ImgInput type='file' id='img-input' accept='image/*' />
    <S.ImgInputLabel htmlFor='img-input'>
      <ImageRegisterIcon />
    </S.ImgInputLabel>
  </MyPageModalWrapper>
);

export default ProfileImgRegisterModal;
