'use client';

import { useEffect, useRef, useState } from 'react';

import { Client as StompClient } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

import * as S from './style';

import { Header } from '@/components';
import { authUrl, get } from '@/libs';
import type { TokenType } from '@/types';
import { getMyId, getSessionId } from '@/utils';

import type { Client } from '@stomp/stompjs';

interface Content {
  content: string;
  sender?: string;
}

interface SocketType extends WebSocket {
  _transport: { url: string };
}

const ChatList = () => {
  const client = useRef<Client | null>(null);
  const [messages, setMessages] = useState<Content[]>([]);

  const getAccessToken = async () => {
    const { accessToken } = await get<TokenType>(authUrl.getMyToken());
    return accessToken;
  };

  const handleClient = async () => {
    const socket = new SockJS(`${process.env.NEXT_PUBLIC_API_BASE_URL}/ws`);

    const accessToken = await getAccessToken();

    client.current = new StompClient({
      connectHeaders: {
        access_token: accessToken,
      },
      webSocketFactory: () => socket,
      debug: (str) => {
        console.log(str);
      },
      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,

      onConnect: () => {
        console.log('WebSocket 연결이 열렸습니다.');
        const subscriptionDestination = `/queue/user/${getSessionId(
          socket as unknown as SocketType
        )}`;

        if (client.current) {
          client.current.subscribe(subscriptionDestination, (frame) => {
            try {
              const parsedMessage = JSON.parse(frame.body);

              console.log(parsedMessage);
              setMessages((prevMessages) => [...prevMessages, parsedMessage]);
            } catch (error) {
              console.error('오류가 발생했습니다:', error);
            }
          });

          client.current.subscribe(`/topic/messaging/13-14`, (frame) => {
            try {
              const parsedMessage = JSON.parse(frame.body);

              console.log(parsedMessage);
              setMessages((prevMessages) => [...prevMessages, parsedMessage]);
            } catch (error) {
              console.error('오류가 발생했습니다:', error);
            }
          });
        }
      },
      onStompError: (frame) => {
        console.error(frame);
      },
    });

    client.current.activate();
  };

  useEffect(() => {
    handleClient();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sendMessage = async () => {
    // 메시지 전송
    const id = Number(await getMyId());
    if (client.current) {
      const publishDestination = `/message`;

      client.current.publish({
        destination: publishDestination,
        body: JSON.stringify({
          to: id,
          message: '안녕하세요',
        }),
      });
    }
  };

  return (
    <>
      <Header />
      <S.Conatiner>
        <S.Text>채팅 목록</S.Text>
        <button onClick={sendMessage}>테스트</button>
      </S.Conatiner>
    </>
  );
};

export default ChatList;
