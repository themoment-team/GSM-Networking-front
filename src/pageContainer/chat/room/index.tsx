'use client';

import { useEffect, useState } from 'react';

import { useParams } from 'next/navigation';

import * as S from './style';

import { Header, SubFunctionHeader, TextArea } from '@/components';
import { useWebSocket } from '@/hooks';
import { getAccessToken } from '@/utils';

const ChatRoom = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  const { userId } = useParams();
  const opponentId = Number(userId);

  const [messages, setMessages] = useState<string[]>([]);

  const handleWebSocketMessage = (message: string) => {
    console.log('Received message:', message);
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  const sendMessage = useWebSocket(
    `${process.env.NEXT_PUBLIC_SOCKET_BASE_URL}`,
    handleWebSocketMessage
  );

  const textAreaButtonClick = (message: string) => {
    setIsDisabled(true);
    try {
      sendMessage(message);
    } catch (error) {
      console.error(error);
    } finally {
      setIsDisabled(false);
    }
  };

  const handleClient = async () => {
    const accessToken = await getAccessToken();
  };

  useEffect(() => {
    handleClient();
  });

  return (
    <>
      <Header />
      <S.Container>
        <SubFunctionHeader title={`방가온 7기`} prevPath='/chat/list' />
        <S.PostWrapper>
          <S.MessageBox>hihi</S.MessageBox>
          <TextArea
            textAreaType='chatting'
            onClick={textAreaButtonClick}
            disabled={isDisabled}
          />
        </S.PostWrapper>
      </S.Container>
    </>
  );
};

export default ChatRoom;
