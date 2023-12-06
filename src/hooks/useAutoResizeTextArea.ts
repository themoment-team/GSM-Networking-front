import type { Dispatch, SetStateAction } from 'react';
import { useEffect } from 'react';

export const useAutoResizeTextArea = (
  textAreaRef: HTMLTextAreaElement | null,
  value: string,
  setIsMultiLine: Dispatch<SetStateAction<boolean>>
) => {
  useEffect(() => {
    if (textAreaRef) {
      textAreaRef.style.height = '0px';
      const scrollHeight = textAreaRef.scrollHeight;
      setIsMultiLine(scrollHeight > 24);
      textAreaRef.style.height = scrollHeight + 'px';
    }
  }, [textAreaRef, value, setIsMultiLine]);
};
