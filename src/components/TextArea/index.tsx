'use client';

import { useState, useRef, useEffect } from 'react';

import * as S from './style';

import { UploadIcon } from '@/assets';
import { useAutosizeTextArea } from '@/hooks';

const TextArea = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [isFocused, setIsFocused] = useState(false);

  useAutosizeTextArea(textAreaRef.current, inputValue);

  // textArea의 focus를 컨트롤합니다. -> focus시 border 변경.
  useEffect(() => {
    const currentTextAreaRef = textAreaRef.current;

    const onFocus = () => setIsFocused(true);
    const offFocus = () => setIsFocused(false);

    if (currentTextAreaRef) {
      currentTextAreaRef.addEventListener('focus', onFocus);
      currentTextAreaRef.addEventListener('blur', offFocus);
    }

    return () => {
      if (currentTextAreaRef) {
        currentTextAreaRef.removeEventListener('focus', onFocus);
        currentTextAreaRef.removeEventListener('blur', offFocus);
      }
    };
  }, []);

  return (
    <S.TextAreaContainer isFocused={isFocused}>
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
          <button>
            <UploadIcon />
          </button>
        </S.UploadWrapper>
      )}
    </S.TextAreaContainer>
  );
};

export default TextArea;
