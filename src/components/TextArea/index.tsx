'use client';

import type { ChangeEvent } from 'react';
import { useState, useRef, useEffect } from 'react';

import * as S from './style';

import { UploadIcon } from '@/assets';
import { useAutosizeTextArea, usePostGwangyaContent } from '@/hooks';

const MAX_LENGTH = 200;

const TextArea = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isMultiLine, setIsMultiLine] = useState(false);

  const {
    mutate: mutateUploadContent,
    isPending,
    isSuccess,
  } = usePostGwangyaContent({
    onSuccess: () => {
      document.cookie = 'isSuccess=true; max-age=5';
      window.location.reload();
    },
  });

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
    mutateUploadContent(inputValue);
  };

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = e.target.value;

    setInputValue(inputValue.slice(0, MAX_LENGTH));
  };

  return (
    <S.TextAreaContainer isFocused={isFocused}>
      <S.TextField
        placeholder='비방 및 성적 발언, 욕설 등이 포함된 글은 삭제 조치를 받을 수 있습니다.'
        maxLength={MAX_LENGTH}
        value={inputValue}
        onChange={handleInputChange}
        ref={textAreaRef}
      />
      {inputValue.length > 0 && (
        <S.UploadWrapper>
          {isMultiLine && (
            <S.MaxLengthNotice>
              {MAX_LENGTH - inputValue.length}
            </S.MaxLengthNotice>
          )}
          <S.UploadButton
            onClick={handleSubmit}
            disabled={isPending || isSuccess}
          >
            <UploadIcon />
          </S.UploadButton>
        </S.UploadWrapper>
      )}
    </S.TextAreaContainer>
  );
};

export default TextArea;
