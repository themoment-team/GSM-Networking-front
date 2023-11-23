'use client';

import * as S from './style';

const Write = () => {
  alert();
  return (
    <S.TextAreaContainer>
      <S.SmallNoticeText>200자 이내 내용 작성*</S.SmallNoticeText>
      <S.CustomTextArea
        placeholder='누군가를 비방하거나 성적인 발언, 과도한 욕설,  스팸 등의 내용을 담은 글을 삭제 및  커뮤니티 이용 금지 조치를 받을 수 있습니다.'
        isError={false}
      />
    </S.TextAreaContainer>
  );
};

export default Write;
