'use client';

import { useEffect, useRef } from 'react';

import { Client as StompClient } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

import * as S from './style';

import { Header } from '@/components';
import { authUrl, get } from '@/libs';
import type { TokenType } from '@/types';
import { getMyId, getSessionId } from '@/utils';

import type { Client } from '@stomp/stompjs';

interface SocketType extends WebSocket {
  _transport: { url: string };
}

const ChatList = () => {
  const client = useRef<Client | null>(null);

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

      onConnect: async () => {
        console.log('WebSocket 연결이 열렸습니다.');
        const subscriptionDestination = `/queue/user/${getSessionId(
          socket as unknown as SocketType
        )}`;
        const userId = await getMyId();

        if (client.current) {
          client.current.subscribe(subscriptionDestination, (message) => {
            try {
              console.log(message);
            } catch (error) {
              console.error('오류가 발생했습니다:', error);
            }
          });

          const encoder = new TextEncoder();
          const binaryData = encoder.encode(
            JSON.stringify({
              userId: userId,
              epochMilli: Date.now(),
              limit: 5,
            })
          );

          const body = JSON.stringify({
            userId: userId,
            epochMilli: Date.now(),
            limit: 5,
          });

          client.current.publish({
            destination: '/queue/header',
            headers: { 'content-type': 'application/json' },
            binaryBody: binaryData,
            body: body,
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

  return (
    <>
      <Header />
      <S.Conatiner>
        <S.Text>채팅 목록</S.Text>
      </S.Conatiner>
    </>
  );
};

export default ChatList;
