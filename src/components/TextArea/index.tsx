'use client';

import { useState } from 'react';

import * as S from './style';

const Write = () => {
  const [inputValue, setInputValue] = useState<string>('');

  return (
    <S.WriteForm>
      <S.TextAreaContainer>
        <S.TextField
          placeholder='누군가를 비방하거나 성적인 발언, 과도한 욕설,  스팸 등의 내용을 담은 글을 삭제 및  커뮤니티 이용 금지 조치를 받을 수 있습니다.'
          maxLength={200}
        />
      </S.TextAreaContainer>
    </S.WriteForm>
  );
};

export default Write;
