'use client';

import { useState, useRef, useEffect } from 'react';
import type { ChangeEvent } from 'react';

import * as S from './style';

import { SendIcon, UploadIcon } from '@/assets';
import { useAutoResizeTextArea } from '@/hooks';

interface Props {
  textAreaType: 'gwangya' | 'chatting' | 'comment';
  onClick: (content: string) => void;
  disabled: boolean;
}

const textAreaElements = {
  gwangya: {
    placeholder:
      '비방 및 성적 발언, 욕설 등이 포함된 글은 삭제 조치를 받을 수 있습니다.',
    icon: <UploadIcon />,
    MAX_LENGTH: 200,
  },
  chatting: {
    placeholder: '메시지 보내기',
    icon: <SendIcon />,
    MAX_LENGTH: 200,
  },
  comment: {
    placeholder: '댓글은 최대 100자 까지 쓸 수 있습니다.',
    icon: <UploadIcon />,
    MAX_LENGTH: 300,
  },
} as const;

const TextArea: React.FC<Props> = ({ textAreaType, onClick, disabled }) => {
  const [inputValue, setInputValue] = useState<string>('');
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isMultiLine, setIsMultiLine] = useState(false);

  useAutoResizeTextArea(textAreaRef.current, inputValue, setIsMultiLine);

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

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = e.target.value.slice(
      0,
      textAreaElements[textAreaType].MAX_LENGTH
    );

    setInputValue(inputValue);
  };

  return (
    <S.TextAreaContainer isFocused={isFocused}>
      <S.TextField
        placeholder={textAreaElements[textAreaType].placeholder}
        maxLength={textAreaElements[textAreaType].MAX_LENGTH}
        value={inputValue}
        onChange={handleInputChange}
        ref={textAreaRef}
      />
      {inputValue.length > 0 && (
        <S.UploadWrapper>
          {isMultiLine && textAreaType === 'gwangya' && (
            <S.MaxLengthNotice>
              {textAreaElements[textAreaType].MAX_LENGTH - inputValue.length}
            </S.MaxLengthNotice>
          )}
          <S.UploadButton
            onClick={() => onClick(inputValue)}
            disabled={disabled}
          >
            {textAreaElements[textAreaType].icon}
          </S.UploadButton>
        </S.UploadWrapper>
      )}
    </S.TextAreaContainer>
  );
};

export default TextArea;
