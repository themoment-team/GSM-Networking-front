'use client';

import { useEffect, useRef, useState } from 'react';

import { useParams } from 'next/navigation';

import { Client as StompClient } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

import * as S from './style';

import { Header, SubFunctionHeader, TextArea } from '@/components';
import { getAccessToken, getMyId } from '@/utils';

const ChatRoom = () => {
  const client = useRef<StompClient | null>(null);
  const [isDisabled, setIsDisabled] = useState(false);
  const { userId } = useParams();
  const opponentId = Number(userId);

  const textAreaButtonClick = (message: string) => {
    if (client.current) {
      setIsDisabled(true);
      try {
        client.current.publish({
          destination: '/message',
          body: JSON.stringify({
            to: opponentId,
            message: message,
          }),
        });
      } catch (error) {
        console.log(error);
      } finally {
        setIsDisabled(false);
      }
    }
  };

  const handleClient = async () => {
    const socket = new SockJS(`${process.env.NEXT_PUBLIC_API_BASE_URL}/ws`);
    const accessToken = await getAccessToken();

    client.current = new StompClient({
      connectHeaders: {
        access_token: accessToken,
      },
      webSocketFactory: () => socket,
      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,

      onConnect: async () => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const myId = await getMyId();
        const MaxId = Math.max(opponentId, myId);
        const MinId = Math.min(opponentId, myId);

        const subDestination = `/topic/messaging/${MinId}-${MaxId}`;

        if (client.current) {
          client.current.subscribe(subDestination, (message) => {
            try {
              console.log(message);
            } catch (error) {
              console.error('오류가 발생했습니다:', error);
            }
          });

          client.current.publish({
            destination: '/check',
            body: JSON.stringify({
              to: String(opponentId),
              epochMilli: Date.now(),
            }),
          });
        }
      },
    });

    client.current.activate();
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
