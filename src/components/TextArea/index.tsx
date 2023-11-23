'use client';

import { useState, useRef } from 'react';

import * as S from './style';

import { UploadIcon } from '@/assets';
import { useAutosizeTextArea } from '@/hooks';

const Write = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useAutosizeTextArea(textAreaRef.current, inputValue);

  return (
    <S.TextAreaContainer>
      <S.TextField
        placeholder='비방 및 성적 발언, 욕설 등은 삭제 및  커뮤니티 이용 금지 조치를 받을 수 있습니다.'
        maxLength={200}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        ref={textAreaRef}
      />
      {inputValue.length > 0 && (
        <S.UploadWrapper>
          <S.MaxLengthNotice>{inputValue.length}/200</S.MaxLengthNotice>
          <UploadIcon />
        </S.UploadWrapper>
      )}
    </S.TextAreaContainer>
  );
};

export default Write;
