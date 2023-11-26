'use client';

import { useState, useRef, useEffect } from 'react';

import * as S from './style';

import { UploadIcon } from '@/assets';
import { useAutosizeTextArea, usePostGwangyaContent } from '@/hooks';
import { getGwangyaTokenCookie } from '@/utils';

const TextArea = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isMultiLine, setIsMultiLine] = useState(false);

  const { mutate: mutateUploadContent } = usePostGwangyaContent();

  useAutosizeTextArea(textAreaRef.current, inputValue, setIsMultiLine);

  // textArea의 focus를 컨트롤합니다. -> focus 시 border 변경.
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

  const handleSubmit = () => {
    const gwangyaToken = getGwangyaTokenCookie();
    mutateUploadContent({ content: inputValue, gwangyaToken: gwangyaToken });
  };

  return (
    <S.TextAreaContainer isFocused={isFocused}>
      <S.TextField
        placeholder='비방 및 성적 발언, 욕설 등이 포함된 글은 삭제 조치를 받을 수 있습니다.'
        maxLength={200}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        ref={textAreaRef}
      />
      {inputValue.length > 0 && (
        <S.UploadWrapper>
          {isMultiLine && (
            <S.MaxLengthNotice>{200 - inputValue.length}</S.MaxLengthNotice>
          )}
          <S.UploadButton onClick={handleSubmit}>
            <UploadIcon />
          </S.UploadButton>
        </S.UploadWrapper>
      )}
    </S.TextAreaContainer>
  );
};

export default TextArea;
